import genericPool, { Factory, Options, Pool } from "generic-pool";
import { CustomGlobal, PuppeteerPoolOptions } from "../../type";
import puppeteer, { Browser } from 'puppeteer';

declare let global: CustomGlobal;

export interface CountBrowser extends Browser {
  useCount: number;
}
/**
 * 浏览器实例池方法
 * @returns pool 浏览器实例
 */
export const initPuppeteerPool = () => {
  if (global && global.puppeteer) {
    global.puppeteer.drain().then(() => global.puppeteer.clear());
  } 
  const opt: PuppeteerPoolOptions = {
    max: 3,//最多产生多少个 puppeteer 实例
    min: 1,//保证池中最少有多少个实例存活
    testOnBorrow: true,// 在将 实例 提供给用户之前，池应该验证这些实例
    autostart: true,//是不是需要在 池 初始化时 初始化 实例
    idleTimeoutMillis: 1000 * 60 * 60,//如果一个实例 60分钟 都没访问就关掉他
    evictionRunIntervalMillis: 1000 * 60 * 3,//每 3分钟 检查一次 实例的访问状态
    maxUses: 2048,//自定义的属性：每一个 实例 最大可重用次数。
    validator: () => Promise.resolve(true)
  }
  const factory: Factory<any> = {
    create: () =>
      puppeteer.launch({
        headless: true,//无头模式
        //如果是访问https页面 此属性会忽略https错误
        ignoreHTTPSErrors: true,
        // 打开开发者工具, 当此值为true时, headless总为false
        devtools: false,
        args: [
          "--no-sandbox", // 沙盒模式
          "--disable-setuid-sandbox", // uid沙盒
          "--disable-gpu", // GPU硬件加速
          "--disable-dev-shm-usage", // 创建临时文件共享内存
          "--no-first-run", // 没有设置首页。在启动的时候，就会打开一个空白页面。
          "--no-zygote",
          "--single-process", // 单进程运行
          "--disable-extensions",
          "--disable-xss-auditor",
          "--disable-popup-blocking",
          "--disable-accelerated-2d-canvas",
          "--enable-features=NetworkService",
        ],
        product: "chrome"
      }).then((instance: CountBrowser) => {
        instance.useCount = 0;
        
        return instance;
      }),
    destroy: instance => {
      return instance.close();
    },
    validate: instance => {
      return opt.validator().then((valid: any) => Promise.resolve(valid && (opt.maxUses <= 0 || instance.useCount < opt.maxUses)));
    }
  };

  const pool = genericPool.createPool(factory, opt);
  const genericAcquire = pool.acquire.bind(pool);
  // 重写了原有池的消费实例的方法。添加一个实例使用次数的增加
  pool.acquire = () =>
    genericAcquire().then((instance: CountBrowser) => {
      instance.useCount += 1
      return instance
    })

  pool.use = (fn: (resource: any) => Promise<any>) => {
    let resource: CountBrowser;
    return pool
      .acquire()
      .then((r: CountBrowser) => {
        resource = r
        return resource
      })
      .then(fn)
      .then(
        (result: any) => {
          // 不管业务方使用实例成功与后都表示一下实例消费完成
          pool.release(resource)
          return result
        },
        (err: any) => {
          pool.release(resource)
          throw err
        }
      )
  }
  return pool;
};