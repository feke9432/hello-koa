import AWS from "aws-sdk";
import { getS3Config } from "../../config";
import { ResponseInfo, S3Data, S3Params } from "../../type";
import { ResponseCode, ResponseMessage } from "../emus/constants";
import { failResponse, successResponse } from "../module/module";
import { logger, timeLoggerInfo } from "./winstonHelper";

/**
 * s3Client
 */
const config = getS3Config();
const s3Client = new AWS.S3(config);
/**
 * 上传图片到 s3
 * @param fileBuff: string | Buffer 文件内容
 * @param generateImageTime: string 生成文件时间信息
 * @param uuid: string 用于标记本次打印的 uid
 * @param imgType: string 文件类型
 */
 export const uploadFileToS3 = (fileBuff: string | Buffer, uuid: string, imgType: string = 'jpeg'): Promise<ResponseInfo> => {
  // 重命名
  let fileName = '_generated/image/' + uuid.replace(/-/g, "") + '.' + imgType;

  const params: S3Params = {
    Body: fileBuff,
    Bucket: config.bucket,
    Key: fileName,
    ContentType: `image/${imgType}`,
    ContentDisposition: 'inline;filename="' + fileName + '"',
  };
  console.log("params", params)
  return new Promise<any>((resolve) => { 
    s3Client.upload(params, (err: any, data: S3Data) => {
      
      if(err) {
        resolve(failResponse(ResponseMessage.ERROR, ResponseCode.ERROR, err.message));
        logger.error({uuid, message: err.message, error: err})
      }else {
        resolve(successResponse(data));
      }
    })
  });
}

export const uploadJsonToS3ByUrl = (fileBuff: string , url: string, uuid: string) => {
  console.log(fileBuff)
  const params: S3Params = {
    Body: Buffer.from(fileBuff),
    Bucket: config.bucket,
    Key: url,
    ContentEncoding: 'base64',
    ContentType: `application/json`,
    ContentDisposition: 'inline;filename="' + url + '"',
  };

  return new Promise<any>((resolve, reject) => { 
    s3Client.upload(params, (err: any, data: S3Data) => {
      console.log(err, data)
      if(err) {
        reject(err);
      }else {
        resolve(data);
      }
    })
  });
}
