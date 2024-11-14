const fs = require('fs');
const path = require('path');
const pinyin = require('node-pinyin');
const { loadMusicMetadata } = require('music-metadata');

// 指定静态文件夹路径和输出文件夹路径
const staticFolder = 'static';
const outputFolder = 'output';
const jsonOutputFile = 'musicList.json';
const lyrOutFile = 'lyrics_data.json';

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
    } else if (path.extname(file).toLowerCase() === '.mp3' || path.extname(file).toLowerCase() === '.flac') {
      mp3Files.push(filePath);
    }
  });

  return mp3Files;
}

// 生成 JSON 文件: 1. 歌曲名 | 2. 作者 | 3. 专辑名 | 4. 专辑图片 | 5. 专辑发行时间
async function generateJsonFile_more(mp3Files, outputFile) {

  const lyricsDataArray = [];
  const data = []
  for (const file of mp3Files) {
    try {
      // const audioStream = fs.createReadStream(file);
      const mm = await loadMusicMetadata();
      const metadata = await mm.parseFile(file);
      // const metadata = await loadMusicMetadata(audioStream, { mimeType: 'audio/mpeg' });
      // 处理歌词
      if (metadata.common.lyrics) {
        const lyricsData = {
          title: metadata.common.title,
          lyrText: metadata.common.lyrics[0].text
        };
        lyricsDataArray.push(lyricsData);
      } else {
        console.log(`未找到歌词: ${file}`);
      }

      // 处理图片
      if (metadata.common.picture && metadata.common.picture.length > 0) {
        const picture = metadata.common.picture[0];
        const imageBuffer = picture.data;
        const imageFilePath = file.replace(/(\.mp3|\.flac)$/, '.jpg');
        fs.writeFileSync(imageFilePath, imageBuffer);
        // console.log(`生成图片文件: ${imageFilePath}`);
      } else {
        console.log(`未找到图片: ${file}`);
      }

      let relativePath = path.relative(outputFolder, file);
      relativePath = relativePath.replace('\\', '/')
      const title = path.basename(file);
      const fileUrl_old = `/static/${relativePath}`;

      data.push({
        title: metadata.common.title || title,
        singer: metadata.common.artist || '',
        album: metadata.common.album || '',
        fileUrl_old,
        isPicture: metadata.common.picture && metadata.common.picture.length > 0,
        isLyrics: metadata.common.lyrics && metadata.common.lyrics.length > 0,
        year: metadata.common.year || '',
      });

    } catch (error) {
      console.error(`处理文件时出错: ${file}`, error.message);
    }
  }

  // 写入集中歌词数据的 JSON 文件
  fs.writeFileSync(lyrOutFile, JSON.stringify(lyricsDataArray, null, 2));
  console.log(`歌词数据 JSON 文件已生成: ${lyrOutFile}`);
  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  console.log(`歌曲数据 JSON 文件已生成: ${outputFile}`);
  console.log(`歌曲图片已生成`);
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
      flag = false;
    }
    if (fileMap[oldFileUrl]) {
      item.fileUrl = fileMap[oldFileUrl];
    }
  });

  fs.writeFileSync(jsonOutputFile, JSON.stringify(data, null, 2));
  console.log(`歌曲数据 JSON 文件已更新: ${jsonFile}`);
}

// 主函数
async function main() {
  // 读取 output 目录中的所有 .mp3 文件并生成 JSON 文件
  const mp3Files = getMp3Files(outputFolder);
  await generateJsonFile_more(mp3Files, jsonOutputFile);

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