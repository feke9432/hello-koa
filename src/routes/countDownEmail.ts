const Router = require('koa-router');
const stream = require('stream');
import { v4 as uuidV4 } from 'uuid';
import { GifImage, ResponseCode, ResponseMessage } from '../emus/constants';
import { countDownGif } from '../services/countDown';
import { delay, failResponse } from '../module/module';
import { logger, timeLoggerInfo } from '../services/winstonHelper';
import { decode } from 'js-base64';

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
router.get("/countDownEmail/:gifData", async (ctx: any, next: () => void) => {
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

  // 获取参数
  let gifData = ctx.params.gifData;
  if(gifData && gifData.endsWith(GifImage)) {
    gifData = gifData.replace(GifImage, "");
  }
  let countDownParams = JSON.parse(decode(gifData)) as any;

  // 队列长度
  logger.info({uuid, message: ` 队列长度：${queue.length}`});

  counter++;

  // 生成gif
  let gifResult;
  let htmlToImageStartTime = Date.now();
  try {
    gifResult = await countDownGif(countDownParams, uuid);
  } catch(error) {
    logger.error({uuid, message: ResponseMessage.ERROR, error});
    ctx.response.body = failResponse(ResponseMessage.ERROR, ResponseCode.ERROR);
    return next();
  }

  timeLoggerInfo('生成gif-用时', uuid, htmlToImageStartTime);

  ctx.set({
    "Content-Type": "application/octet-stream"
  });
  
  ctx.body = new stream.PassThrough().end(gifResult);

  counter--;
  if(queue.length) {
    queue.shift()();
  }

  timeLoggerInfo('总用时', uuid, totalStartTime);
});

module.exports = router;