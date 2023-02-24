/**
 * 倒计时请求参数
 */
 export interface CountDownParams {
  backgroundColor: string; // 背景颜色
  digitColor: string; // 字体颜色
  digitFontFamily: string; // 字体
  digitFontSize: number; // 字体大小
  labelColor: string; // 提示文案字体颜色
  labelFontFamily: string; //
  labelFontSize: number; // 提示文案字体大小
  locale?: string; // 
  showLabels: boolean; // 是否展示提示文案
  time: string; // 倒计时截止日期
  timezone: string; // 时区
  width: number; // 宽度
  height: number; // 高度
}

/**
 * 倒计时文案
 */
export interface CountDownItem {
  text: string; // 显示文案
  x: number; // x轴坐标
  y: number; // y轴坐标
}

/**
 * 字体
 */
export interface FontItem {
  fontPath: string; // 字体路径
  fontName: string; // 字体名称
}