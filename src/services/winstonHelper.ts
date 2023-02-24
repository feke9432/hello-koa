import winston, {format, Logger} from 'winston';


 // 默认配置
const defaultLoggerOptions: winston.LoggerOptions = {
  /**
   * const levels = {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    };
  */
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'sihai-html-ssr' },
}

// 混合默认值创建logger
export const createLoggerWithDefault = (opt: winston.LoggerOptions):winston.Logger =>{
  const options = Object.assign(defaultLoggerOptions, opt);
  return winston.createLogger(options);
}

// 创建在logger
export const createMaLogger = ():winston.Logger =>{
  return createLoggerWithDefault({
    transports: [
      new winston.transports.Console({
        format: format.combine(
          format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          format.align(),
          format.printf(
              (info) => {
                const log = `${info.service}: ${info.uuid || ''}: ${info.level}: ${info.timestamp} ${info.message}`;
                if (info.level === 'error') {
                  return `${log}\n${info.error}`
                }
                return log;
              }
          )
        ),
      }),
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
    ]
  })
}

export const logger = createMaLogger();


/**
 * 格式化打印信息
 * @param message: string 具体要打印的信息
 * @param uuid: string 标记打印信息为某次接口请求
 * @param startTime: number 本次打印开始时间
 * @return browserTimeMsg: string  返回格式化后的信息
*/
export function timeLoggerInfo(message: string, uuid: string, startTime: number): string {
  let browserTimeMsg = `${message}: ${(Date.now() - startTime)/1000}s`;

  logger.info({uuid, message: browserTimeMsg});

  return browserTimeMsg
}
