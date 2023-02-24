import Koa from 'koa';
import {koaMiddleware} from 'prometheus-api-metrics';

const koaStatic = require("koa-static");
const cors = require("koa2-cors");
const { koaBody } = require("koa-body");
const path = require("path");
const actuator = require('koa-actuator');
const { timeout } = require('koa2-timeout');

import { CustomGlobal } from "../type";
declare let global: CustomGlobal;

import { initPuppeteerPool } from "./services/puppeteerPool";
import { logger } from "./services/winstonHelper";
import { failResponse } from './module/module';
import { ResponseCode, ResponseMessage } from './emus/constants';
import { timeOutNum } from './timeHelper';
import { initGif } from './services/gifRender';
const routes = require('./routes');

const app = new Koa();

// 超时处理函数，让超时返回格式符合要求
const timeOutHandler = (ctx: Koa.Context) => {
  ctx.body = failResponse(ResponseMessage.TIMEOUT, ResponseCode.TIMEOUT);
};

// 初始化浏览器实例池
global.puppeteer = initPuppeteerPool();
// 初始化gif实例
global.gif = initGif();
const server = app
  .use(koaBody({
    multipart: true,
    formLimit:"10mb",
    jsonLimit: "10mb",
    textLimit: "10mb"
  })) // 解析请求body
  .use(timeout(timeOutNum, timeOutHandler)) // 设置超时时间，处理超时返回值
  .use(routes.routes()) // 注册路由
  .use(routes.allowedMethods()) // 当请求方法错误时（比如需要get请求发成了post请求），提示相应错误
  .use(koaStatic(path.join(__dirname, "image"))) // 静态资源
  .use(cors()) // 是否允许所有跨域
  .use(koaMiddleware({metricsPath: '/actuator/metrics'})) // 添加服务监控
  .use(actuator()) // 添加服务可用监控 /actuator/health   /actuator/info
  .listen(8099, () => {
    logger.info("==== 服务启动成功 ====");
  }); // 监听 8099端口


