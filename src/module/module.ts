import { ResponseCode, ResponseMessage } from '../emus/constants';
import { ResponseInfo} from '../../type';
/**
 * 成功返回
 * @param data 
 * @returns 
 */
 export const successResponse = (data: any): ResponseInfo => {
  return {
    code: ResponseCode.SUCCESS,
    data: data,
    message: ResponseMessage.SUCCESS
  }
}

/**
 * 失败返回
 * @param message 
 * @returns 
 */
export const failResponse = (message: string, code?: ResponseCode, data: any = null): ResponseInfo => {
  return {
    code: code,
    data: data,
    message: message
  }
}

/**
 * 保存图片请求接口
 * @param message 
 * @returns 
 */
export interface saveImgRequest {
  customHtml: string;
  imgQuality: number; // 图片质量 0~100
  imgType: 'jpeg' | 'png';
}

/**
 * gif倒计时成功返回
 * @param data 返回数据
 * @returns 
 */
export const gifSuccessResponse = (data: any) => {
  return {
    success: true,
    data: data
  }
}

/**
 * 延迟方法
 * @param queue 延迟池子
 */
export const delay = (queue: Function[]) => {
  return new Promise((resolve, reject) => {
    queue.push(resolve);
  });
};

// unlayer 接口基础返回值类型
export interface unlayerBaseResponse<T> {
  success: boolean;
  message?: string;
  data: T
}

// unlayer auth 接口返回值类型
export interface unlayerAuthResponse {
  token: string;
}

// unlayer session 接口返回值类型 
export interface unlayerSessionResponse {
  token: string;
  user: {
    id: string;
  }
  project: {
    id: number,
    name: string,
    storage: boolean,
    tools: any[],
    fonts: {
      label: string;
      value: string;
      url: string;
      defaultFont: boolean;
    }[];
    mergeTags: {
      name: string;
      value: string;
    }[];
    overrideDefaultFeatures: {}
  }
  subscription: {
    status: string;
    entitlements: {
      "branding": boolean,
      "collaboration": boolean,
      "imageEditor": boolean,
      "stockImages": boolean,
      "userUploads": boolean,
      "allowedDomains": number,
      "allowedProjects": number,
      "customCSS": boolean,
      "customJS": boolean,
      "customFonts": boolean,
      "customTools": number,
      "customTabs": number,
      "customBlocks": number,
      "uploadMaxSize": number,
      "teamLimit": number,
      "templateFolders": number,
      "campaignFolders": number,
      "customMergeTags": number,
      "export": boolean,
      "smartHeadings": boolean,
      "smartButtons": boolean,
      "magicImage": boolean
    },
    items: {
      timer: {
        quantity: number;
      },
      social: {
        quantity: number;
      }
    }[],
    addons: {
      timer: {
        quantity: number;
      },
      social: {
        quantity: number;
      }
    }[]
  }
  isAuthenticated: boolean;
}
