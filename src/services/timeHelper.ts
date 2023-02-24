// 时间管理类接口
export interface TimeHelper {
  startTime: number;
  outTimeNum: number;
  checkIsTimeout: () => boolean;
}
// 设置超时 2 * 60s
export const timeOutNum = 2 * 60 * 1000;

// nodejs 不支持 class 写法，使用函数类写法
export const TimeHelperClass = function () {
  this.startTime = Date.now();

  this.checkIsTimeout = () => {
    return (Date.now() - this.startTime) > timeOutNum;
  }

} as any as { new (): TimeHelper; };
