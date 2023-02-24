import path from "path";
import { CustomGlobal } from "../../type";
import { CountDownItem, CountDownParams, FontItem } from "../../type/countDown";
import { CountDownEnMap, COUNT_DOWN_FIELD, DefaultOption, FontList } from "../emus/constants";
import { logger, timeLoggerInfo } from "./winstonHelper";

const fs = require("fs");

const { createCanvas, registerFont } = require('../lib/node-canvas/index.js');
// todo uuid 是为了标记本次接口请求所生成的日志的，应在接口请求时触发，然后传下来
let uuid!: string;

declare let global: CustomGlobal;

let gifRenderTime: number = 0;

/**
 * 绘制倒计时
 */
export class DrawCountDown {
  valueData: Array<CountDownItem[]>; // 倒计时数值数据
  labelData: CountDownItem[]; // 倒计时标题数据
  startX: number; // 开始位置x轴坐标
  startY: number; // 开始位置y轴坐标
  options: any; // 初始数据
  colonSpace: number; // 冒号间距
  rowSpace: number; // 行间距

  width: number; // canvas宽度
  height: number; // canvas高度
  backgroundColor: string; // canvas背景
  colonWidth: number; // 分号的宽度

  debugger: boolean; // 是否debugger

  constructor(options: any) {
    console.log("配置信息", options);
    this.options = options;
    this.valueData = [];
    this.labelData = [];
    this.colonSpace = 38;
    this.rowSpace = 20;
    this.colonWidth = 10;
    this.width = this.options.width;
    this.height = this.options.height;

    // todo 这里的计算规则请加一下注释。
    const { digitFontSize, labelFontSize, showLabels, backgroundColor } = this.options;
    if(digitFontSize < 36) {
      this.colonWidth = 5;
    } 
    this.startX = (this.width - (digitFontSize * 4 + this.colonSpace * 6 + 3*this.colonWidth)) / 2 - this.colonWidth/2;
    if (showLabels) {
      this.startY = (this.height - digitFontSize - labelFontSize - this.rowSpace)/2 + digitFontSize/2;
    } else {
      this.startY = this.height / 2;
    }
    
    this.backgroundColor = backgroundColor;
    this.initCountDownData();  
  }

  /**
   * 初始化数据
   */
  initCountDownData() {
    const { digitFontSize, labelFontSize, countDownCount = 60, time, timezone } = this.options;
    let startTime = new Date(getWorldTimeZone(null, timezone)).getTime();
    let endTime = new Date(getWorldTimeZone(time, timezone)).getTime();
    let diffTime = (endTime - startTime) / 1000;
    
    let frameCount = Math.min(countDownCount, diffTime);
    if(diffTime <= 0) {
      diffTime = 0;
      frameCount = 1;
    }
    
    for (let i = 0; i < frameCount; i++) {
      let map: any = calcDiffDate(diffTime);
      diffTime--;
      let arr: CountDownItem[] = [];
      let positionX = this.startX;
      COUNT_DOWN_FIELD.forEach((item, index) => {
        let value = map[item];
        if(index > 0) {
          if(item == "colon") {
            positionX = positionX + digitFontSize + this.colonSpace;
            value = ":";
          }else {
            positionX = positionX + this.colonSpace + this.colonWidth;
            if(i ==0) {
              this.labelData.push({
                text: CountDownEnMap[item],
                x: positionX + digitFontSize / 2,
                y: this.startY + this.rowSpace + digitFontSize/2 + labelFontSize/2
              })
            }
          }
        }else {
          if(i ==0) {
            this.labelData.push({
              text: CountDownEnMap[item],
              x: positionX + digitFontSize/2,
              y: this.startY + this.rowSpace + digitFontSize/2 + labelFontSize/2
            })
          }
        }

        arr.push({
          text: value,
          x: positionX,
          y: this.startY
        })
      });
      this.valueData.push(arr);
      arr = [];
    }
  }

  /**
   * 注册字体
   */
  registerFont() { // todo 单词拼写错误
    return new Promise((resolve, reject) => {  // todo resolve 拼写错误
      let fontPath = path.join(__dirname, "../font");
      fs.readdir(fontPath, function(err: any, files: string[]) {  // todo 能否限定类型
        if(err) {
          reject(false);
          logger.info({uuid, message: ` 读取字体失败`});
        }else {
          files.forEach(function(filePath: string) {
            let fontName = FontList.find((item: FontItem) => item.fontPath == filePath)?.fontName;
            if(fontName) {
              registerFont(`${fontPath}/${filePath}`, {
                family: fontName,
              });
            }
          });
          global.isRegisterFont = true;   // todo 单词拼写错误
          resolve(true);
        }
      });
    })
  }

  /**
   * 画倒计时
   * @param unitDate 
   * @param callback 
   */
  drawCountDown(callback: Function) { // todo 需要类型限定
    let startTime = Date.now();
    
    const { showLabels, digitColor, digitFontSize, digitFontFamily, labelColor, labelFontSize, labelFontFamily, width, height } = this.options;
    const canvas = createCanvas(width, height);
    let ctx = canvas.getContext('2d');
    ctx.textBaseline = "middle";

    // 检查字体是否存在
    const digitFontFamilyDraw = this.checkFont(digitFontFamily);
    const labelFontFamilyDraw = this.checkFont(labelFontFamily);

    function draw(unitDate: CountDownItem[]) {
      ctx.clearRect(0, 0, width, height);
      
      // 画倒计时数值
      ctx.beginPath();
      ctx.textAlign = "start";
      ctx.fillStyle = digitColor;
      ctx.font = `${digitFontSize}px ${digitFontFamilyDraw}`;
      unitDate.forEach((item: CountDownItem) => {
        ctx.fillText(item.text, item.x, item.y);
      });

      // 画倒计时标签
      if(showLabels) {
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.fillStyle = labelColor;
        ctx.font = `${labelFontSize}px ${labelFontFamilyDraw}`;
        this.labelData.forEach((item: CountDownItem) => {
          ctx.fillText(item.text, item.x, item.y);
        });
      }

      // 画完之后保存frame到gif中
      if(callback) {
        callback(canvas);
      }
    }
    
    // 画每一帧的倒计时
    for (let unitDate of this.valueData) {
      draw.call(this, unitDate);
    }
    timeLoggerInfo("绘制倒计时canvas用时", uuid, startTime);
  }

  /**
   * 检查字体是否存在（默认: Microsoft YaHei）
   */
  checkFont(fontName: string) {
    return FontList.find((item: FontItem) => item.fontName == fontName)?.fontName || "Microsoft YaHei";
  }
}

/**
 * 计算倒计时日期
 * @param diffTime 时间差
 * @returns 
 */
const calcDiffDate = (diffTime: number) => {
  let date = checkDate(Math.floor(diffTime/(24*60*60)));
  let hour = checkDate(Math.floor(diffTime/60/60%24));
  let minute = checkDate(Math.floor(diffTime/60%60));
  let seconds = checkDate(Math.floor(diffTime%60));
  return { date, hour, minute, seconds, diffTime };
}

/**
 * 处理数据补位
 * @param value 日期值 
 * @returns 
 */
const checkDate = (value: number) => {
  return value < 10 ? "0" + value : value;
}

/**
 * 获取时区本地时间
 * @param datePara 日期
 * @param options 地区时区
 * @returns 
 */
const getWorldTimeZone = (datePara?: any, timezone?: string) => {
  datePara = datePara ? datePara : new Date();
  return new Date(datePara).toLocaleString("en-US", {
    timeZone: timezone || "Asia/Shanghai"
  });
};

/**
 * 开始倒计时
 * @param countDownParams 
 * @returns 
 */
export const countDownGif = (countDownParams: CountDownParams, uuid: string) => {
  return new Promise(async (resolve) => {
    uuid = uuid;
    const startTime = Date.now();
    const config = Object.assign(DefaultOption, countDownParams);
    let drawCountDown = new DrawCountDown(config);
    let gif = global.gif;

    if(!global.isRegisterFont) {
      await drawCountDown.registerFont();
    } 

    timeLoggerInfo("初始化数据用时", uuid, startTime);

    // 监听gif渲染完成
    gif.once("finished", function(blob: any) {
      drawCountDown = null;
      resolve(blob);
      timeLoggerInfo("gif处理渲染用时", uuid, gifRenderTime);
      logger.info({uuid, message: `gif倒计时生成成功`});
    });

    //重置数据
    gif.reset({
      with: countDownParams.width,
      height: countDownParams.height,
      background: countDownParams.backgroundColor
    });

    // 画倒计时
    drawCountDown.drawCountDown((canvas: any) => {
      // 每一帧放入gif的frame
      gif.addFrame(canvas, { delay: 1000, copy: true });
      if(gif.frames.length == drawCountDown.valueData.length) {
        gifRenderTime = Date.now();
        // gif渲染
        gif.render();
      }
    });
  })
}