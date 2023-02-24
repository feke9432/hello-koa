const Router = require('koa-router');
import { v4 as uuidV4 } from 'uuid';
import { IMAGE_TYPE, ResponseCode, ResponseMessage } from '../emus/constants';
import { htmlToImage } from '../services/htmlToImage';
import { delay, failResponse, saveImgRequest } from '../module/module';
import { TimeHelperClass } from '../timeHelper';
import { uploadFileToS3 } from '../services/uploadFileToS3';
import { logger, timeLoggerInfo } from '../services/winstonHelper';

const router = new Router();

// 请求队列
const queue: Function[] = [];
// 初始请求数
let counter = 0;
// 最大请求数 
const maxAllowedRequest = 50;

/**
 * 生成图片并上传云平台
 */
router.post("/saveImage", async (ctx: any, next: () => void) => {
  const { customHtml, imgQuality, imgType } = ctx.request.body as saveImgRequest;
  const timeHelper = new TimeHelperClass();
  const uuid = uuidV4();
  // 如果已经超过了最大并发
  if(counter > maxAllowedRequest) {
    try {
      await delay(queue);
    } catch(error) {
      logger.error({uuid, message: '超过最大并发延迟函数错误', error})
    }
  }
  // 队列长度
  logger.info({uuid, message: ` 队列长度：${queue.length}`});

  counter++;

  // html 空值
  if(!customHtml) {
    ctx.response.body = failResponse(ResponseMessage.INVALIDLINK, ResponseCode.INVALIDLINK);
    return next();
  }

  console.log("quality", imgQuality, imgType)
  // 图片类型
  if(imgType && !IMAGE_TYPE.includes(imgType)) {
    ctx.response.body = failResponse(ResponseMessage.IMAGETYPE, ResponseCode.IMAGETYPE);
    return next();
  }

  // 分辨率
  if(imgQuality && (imgQuality < 0 || imgQuality > 100)) {
    ctx.response.body = failResponse(ResponseMessage.QUALITY, ResponseCode.QUALITY);
    return next();
  }

  let imgResult;
  let htmlToImageStartTime = Date.now();
  try {
    // 生成图片
    imgResult = await htmlToImage(customHtml, uuid, imgQuality, imgType, timeHelper);
  } catch(error) {
    logger.error({uuid, message: ResponseMessage.ERROR, error});
    ctx.response.body = failResponse(ResponseMessage.ERROR, ResponseCode.ERROR);
      
    return next();
  }
  // 请勿修改位置，此方法内做了时间判断。
  let generateImageTimeMsg = timeLoggerInfo('浏览器-生成图片-用时', uuid, htmlToImageStartTime);

  let responseInfo;
  let uploadStartTime = Date.now();
  try {
    responseInfo = await uploadFileToS3(imgResult as string | Buffer, uuid, imgType);
  } catch(error) {
    logger.error({uuid, message: ResponseMessage.IMAGEUPLOADFAIL, error});
    ctx.response.body = responseInfo;
    return next();
  }
  // 请勿修改位置，此方法内做了时间判断。
  let uploadTimeMsg = timeLoggerInfo('上传图片到云平台用时', uuid, uploadStartTime);

  if(responseInfo.data?.extra) {
    responseInfo.data.extra = {
      generateImageTime: generateImageTimeMsg,
      uploadTime: uploadTimeMsg,
    }
  }
  
  counter--;
  if(queue.length) {
    queue.shift()();
  }
  
  ctx.response.body = responseInfo;
  timeLoggerInfo('总用时', uuid, timeHelper.startTime);
});

module.exports = router;