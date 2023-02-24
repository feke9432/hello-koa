const Router = require('koa-router');
import { v4 as uuidV4 } from 'uuid';
import { CountDownParams } from '../../type/countDown';
import { ResponseCode, ResponseMessage } from '../emus/constants';
import { countDownGif } from '../services/countDown';
import { delay, failResponse, gifSuccessResponse } from '../module/module';
import { uploadFileToS3 } from '../services/uploadFileToS3';
import { logger, timeLoggerInfo } from '../services/winstonHelper';

const router = new Router();

// 请求队列
const queue: Function[] = [];
// 初始请求数
let counter = 0;
// 最大请求数 
const maxAllowedRequest = 20;

/**
 * 生成倒计时gif
 */
router.post("/countDown", async (ctx: any, next: () => void) => {
  const uuid = uuidV4();

  // 如果已经超过了最大并发
  if(counter > maxAllowedRequest) {
    try {
      await delay(queue);
    } catch(error) {
      logger.error({uuid, message: '超过最大并发延迟函数错误', error})
    }
  }

  const totalStartTime = Date.now();

  const countDownParams = ctx.request.body as CountDownParams;
  // 队列长度
  logger.info({uuid, message: ` 队列长度：${queue.length}`});

  counter++;

  // 生成gif
  let gifResult: any;
  let htmlToImageStartTime = Date.now();
  try {
    gifResult = await countDownGif(countDownParams, uuid);
  } catch(error) {
    logger.error({uuid, message: ResponseMessage.ERROR, error});
    ctx.response.body = failResponse(ResponseMessage.ERROR, ResponseCode.ERROR);
    return next();
  }

  timeLoggerInfo('生成gif-用时', uuid, htmlToImageStartTime);

  // 上传云平台
  let responseInfo;
  let uploadStartTime = Date.now();
  try {
    responseInfo = await uploadFileToS3(gifResult as string | Buffer, uuid, "gif");
  } catch(error) {
    logger.error({uuid, message: ResponseMessage.IMAGEUPLOADFAIL, error});
    return next();
  }
  timeLoggerInfo('上传gif图片到云平台用时', uuid, uploadStartTime);

  ctx.response.body = gifSuccessResponse({
    id: uuid,
    countdownUrl: responseInfo?.data?.Location
  });

  counter--;
  if(queue.length) {
    queue.shift()();
  }

  timeLoggerInfo('总用时', uuid, totalStartTime);
});

module.exports = router;