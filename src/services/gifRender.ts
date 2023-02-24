
const GIF = require("../lib/gif/gif.js");
const path = require("path");

/**
 * 全局的gif渲染
 */
export const initGif = () => {
  const gif = new GIF({
    workers: 3,
    quality: 10,
    debug: false,
    //background: "#000",
    workerScript: path.join(__dirname, "../lib/gif/gif.worker.js")
  });
  return gif;
}