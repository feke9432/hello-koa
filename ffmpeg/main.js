const fs = require('fs');
const path = require('path');
const pinyin = require('node-pinyin');

// 指定静态文件夹路径和输出文件夹路径
const staticFolder = 'static';
const outputFolder = 'output';
const jsonOutputFile = '1.json';

// 定义自定义编码函数
function customEncode(str) {
  // 将中文字符转换为拼音
  const pinyinArray = pinyin(str, { style: 'normal' });
  const pinyinStr = pinyinArray.flat().join('');

  // 替换特殊字符
  return pinyinStr.replace(/ /g, '_') // 将空格替换为下划线
                  // .replace(/[^a-zA-Z0-9_\-\.]/g, '') // 移除其他特殊字符
                  .toLowerCase(); // 转换为小写
}
// 递归获取所有 .mp3 文件及其路径
function getMp3Files(dir) {
  const mp3Files = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      mp3Files.push(...getMp3Files(filePath));
    } else if (path.extname(file).toLowerCase() === '.mp3') {
      mp3Files.push(filePath);
    }
  });

  return mp3Files;
}

// 生成 JSON 文件
function generateJsonFile(mp3Files, outputFile) {
  const data = mp3Files.map(file => {
    let relativePath = path.relative(outputFolder, file);
    relativePath = relativePath.replace('\\', '/')
    const title = path.basename(file);
    const singer = '周杰伦'; // 这里可以根据实际需求动态获取歌手信息
    const fileUrl_old = `/static/${relativePath}`;

    return {
      title,
      singer,
      fileUrl_old
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  console.log(`JSON 文件已生成: ${outputFile}`);
}

// 递归修改文件和文件夹名称
function renameFilesAndFolders(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const oldPath = path.join(dir, file);
    const stat = fs.statSync(oldPath);

    // 生成新的文件或文件夹名称
    let newName = customEncode(file);
    const newPath = path.join(dir, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      // console.log(`重命名: ${oldPath} -> ${newPath}`);
    }

    if (stat.isDirectory()) {
      renameFilesAndFolders(newPath);
    }
  });
}
let flag = true;
// 更新 1.json 中的 fileUrl 字段
function updateJsonFile(jsonFile, fileMap) {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
  data.forEach(item => {
    const oldFileUrl = customEncode(item.fileUrl_old);
    if (flag) {
      console.log( fileMap, oldFileUrl)
      flag = false;
    }
    if (fileMap[oldFileUrl]) {
      item.fileUrl = fileMap[oldFileUrl];
    }
  });

  fs.writeFileSync('2.json', JSON.stringify(data, null, 2));
  console.log(`JSON 文件已更新: ${jsonFile}`);
}

// 主函数
function main() {
  // 读取 output 目录中的所有 .mp3 文件并生成 JSON 文件
  const mp3Files = getMp3Files(outputFolder);
  generateJsonFile(mp3Files, jsonOutputFile);

  // 递归修改文件和文件夹名称
  renameFilesAndFolders(outputFolder);

  // 获取所有文件的新旧路径映射
  const allFiles = getMp3Files(outputFolder);
  const fileMap = {};

  allFiles.forEach(file => {
    let oldRelativePath = path.relative(outputFolder, file);
    oldRelativePath = oldRelativePath.replace('\\', '/')
    const newRelativePath = path.dirname(oldRelativePath) + '/' + customEncode(path.basename(oldRelativePath));
    const oldFileUrl = `/static/${oldRelativePath}`;
    const newFileUrl = `/static/${newRelativePath}`;
    fileMap[oldFileUrl] = newFileUrl;
  });

  // 更新 1.json 中的 fileUrl 字段
  updateJsonFile(jsonOutputFile, fileMap);
}

// 执行主函数
main();