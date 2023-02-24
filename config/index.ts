import { S3Config } from "../type";

/**
 * 获取s3环境配置
 */
const { ENV_NAME, ACCESSKEYID, SECRETACCESSKEY, REGION, BUCKET } = process.env;
export const getS3Config = () => {
  console.log("环境配置", ENV_NAME, ACCESSKEYID, SECRETACCESSKEY, REGION, BUCKET);
  let config: S3Config = {
    accessKeyId: ACCESSKEYID,
    secretAccessKey: SECRETACCESSKEY,
    region: REGION,
    bucket: BUCKET,
  }
  return config;
};