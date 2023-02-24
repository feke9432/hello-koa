import { Browser, ScreenshotOptions } from 'puppeteer';
import { CustomGlobal } from '../../type';
import { TimeHelper } from './timeHelper';

import { logger, timeLoggerInfo } from "./winstonHelper";

declare let global: CustomGlobal;
export type puppeteerImgType = "png" | "jpeg" | "webp";


/**
 * html转图片
 * @param content: string 代码片段 or html链接
 * @param uuid: string log 所需 唯一id
 * @param imgQuality: number 设置图片质量 范围在 0 ~ 100 之间
 * @param imgType: puppeteerImgType 生成的截图类型
 * @return 返回Buffer
 */
export const htmlToImage = async (content: string, uuid: string, imgQuality: number = 80, imgType: puppeteerImgType = "jpeg", timeHelper: TimeHelper) => {
   
  let startTime = Date.now();
  const error = new Error();
  const loggerError = {uuid, message: '生成图片超时', error};

  const browser: Browser = await global.puppeteer.use((resource) => {
    return resource;
  });

  timeLoggerInfo('浏览器-启动-用时', uuid, startTime);

  startTime = Date.now();

  if (timeHelper.checkIsTimeout()) {
    logger.error(loggerError)
    throw error;
  }
  
  const page = await browser.newPage();

  timeLoggerInfo('浏览器-新建-页面用时', uuid, startTime);

  startTime = Date.now();

  if (timeHelper.checkIsTimeout()) {
    logger.error(loggerError);
    page.close();
    throw error;
  }
  page.setViewport({width: 1000, height: 1190});
  if(content.startsWith("http")) {
    // 链接
    await page.goto(content);
  }else {
    // 代码片段
    await page.setContent(content);
  }

  if (timeHelper.checkIsTimeout()) {
    logger.error(loggerError);
    page.close();
    throw error;
  }

  timeLoggerInfo('浏览器-渲染-页面用时', uuid, startTime);

  startTime = Date.now();

  // 获取快照配置
  let screenshotConfig: ScreenshotOptions = {
    fullPage: true, 
    type: imgType,
  }

  // 设置图片分辨率
  if(imgType == "jpeg") {
    screenshotConfig.quality = imgQuality;
  }

  console.log(screenshotConfig);

  const fileBuff = await page.screenshot(screenshotConfig);
  
  page.close();

  return fileBuff
}
