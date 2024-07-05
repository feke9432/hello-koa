// nodejs实现一个繁体txt文件转简体的脚本

// 导入所需模块
const fs = require('fs');
const iconv = require('iconv-lite');
const OpenCC = require('opencc-js');

// 初始化OpenCC转换器，设置转换模式为"t2s"，即繁体转简体
const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });

// 定义转换函数
function convertFile(inputPath, outputPath) {
  // 使用iconv-lite读取并转换文件编码为UTF-8
  fs.readFile(inputPath, (err, data) => {
    if (err) {
      console.error('读取文件时出错:', err);
      return;
    }
    
    let traditionalText = iconv.decode(data, 'utf8'); // 假设繁体文件编码为Big5，根据实际情况调整
    
    // 使用OpenCC进行繁体到简体的转换
    let simplifiedText = converter(traditionalText);
    
    // 将转换后的简体中文写入新文件
    fs.writeFile(outputPath, simplifiedText, 'utf8', (err) => {
      if (err) {
        console.error('写入文件时出错:', err);
      } else {
        console.log('转换完成，简体文件已保存至:', outputPath);
      }
    });
  });
}

// 示例：转换'example_traditional.txt'为简体，并保存为'example_simplified.txt'
convertFile('static/1.txt', 'static/2.txt');