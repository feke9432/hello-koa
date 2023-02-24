import { FontItem } from "../../type/countDown";

/**
 * 响应code
 */
export enum ResponseCode {
  SUCCESS = 2000, // 成功
  INVALIDLINK = 2001, // 无效的html链接
  ERROR = 2002, // 生成图片失败
  TIMEOUT = 2003, // 请求超时
  QUALITY = 2004, // 分辨率设置范围在0-100之间
  QUALITY_NO = 2005, // png类型的图片不允许设置分辨率
  IMAGETYPE = 2006, // 图片类型支持png或者jpeg
  IMAGEUPLOADFAIL = 2007, // 图片上传错误
}

/**
 * 响应message
 */
export enum ResponseMessage {
  SUCCESS = "生成图片成功",
  INVALIDLINK = "无效的html链接",
  ERROR = "生成图片失败",
  TIMEOUT = "请求超时",
  QUALITY = "分辨率设置范围在0-100之间",
  IMAGETYPE = "图片类型支持png或者jpeg",
  QUALITY_NO = "png类型的图片不允许设置分辨率",
  IMAGEUPLOADFAIL = '图片上传错误'
}

/**
 * 图片类型
 */
export const IMAGE_TYPE = ["png", "jpeg"];


/**
 * 倒计时展示字段
 */
export const COUNT_DOWN_FIELD = ["date", "colon", "hour", "colon", "minute", "colon", "seconds"];

/**
 * 字段文字
 */
export const CountDownMap: any = {
  date: "天",
  hour: "时",
  minute: "分",
  seconds: "秒"
}

/**
 * 字段文字英文
 */
export const CountDownEnMap: any = {
  date: "Days",
  hour: "Hours",
  minute: "Minutes",
  seconds: "Seconds"
}

/**
 * 倒计时生产图片默认参数
 */
 export const DefaultOption = {
  backgroundColor: "#000",
  digitColor: "#fff",
  digitFontFamily: "Open Sans",
  digitFontSize: 75,
  labelColor: "#fff",
  labelFontFamily: "Open Sans",
  labelFontSize: 28,
  locale: "en-US", // 
  showLabels: true,
  time: "",
  timezone: "America/Los_Angeles",
  width: 660,
  height: 147
};

/**
 * 字体文件名和字体名
 */
export const FontList: FontItem[] = [
  {
    fontPath: "Arial.ttf",
    fontName: "Arial"
  },
  {
    fontPath: "ArialBlack.ttf",
    fontName: "Arial Black"
  },
  {
    fontPath: "BookAntiqua.ttf",
    fontName: "Book Antiqua"
  },
  {
    fontPath: "ComicSansMs.ttf",
    fontName: "Comic Sans MS"
  },
  {
    fontPath: "Microsoft-YaHei.ttf",
    fontName: "Microsoft YaHei"
  },
  {
    fontPath: "CourierNew.ttf",
    fontName: "Courier New"
  },
  {
    fontPath: "OpenSans.ttf",
    fontName: "Open Sans"
  },
  {
    fontPath: "Georgia.ttf",
    fontName: "Georgia"
  },
  {
    fontPath: "Helvetica.ttf",
    fontName: "Helvetica"
  },
  {
    fontPath: "Impact.ttf",
    fontName: "Impact"
  },
  {
    fontPath: "TimesNewRomance.ttf",
    fontName: "Times New Roman"
  }
];

/**
 * gif图片
 */
export const GifImage = ".gif";