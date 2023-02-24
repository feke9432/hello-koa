import { Options, Pool } from "generic-pool";

/**
 * S3Config 配置信息
 */
export interface S3Config {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  bucket: string;
}

/**
 * S3Config 请求参数
 */
export interface S3Params {
  Body: string | Buffer; // 文件
  Bucket: string; // Bucket
  Key: string; // 文件key
  ContentType: string; // 图片类型
  ContentDisposition: string; // disposition
  ContentEncoding?: string; // 文件编码
}

/**
 * S3 响应数据
 */
export interface S3Data {
  Bucket: string;
  ETag: string;
  Key: string;
  Location: string;
  extra: any;
}

/**
 * 响应信息
 */
export interface ResponseInfo {
  code: number;
  data: any;
  message: string;
}

/**
 * Global
 */
export interface CustomGlobal {
  puppeteer: Pool<any>;
  isRegisterFont: boolean; // 是否注册字体
  counter: number; 
  queue: Function[],
  gif: any;
}


/**
 * 浏览器实例池配置
 */
export interface PuppeteerPoolOptions extends Options {
  maxUses: number;
  validator: Function;
}
