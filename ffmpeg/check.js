import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStream } from 'music-metadata';
import { createReadStream } from 'fs';

// 递归读取文件夹
function readFilesRecursively(dir) {
  const files = [];

  function walk(currentDir) {
    const list = fs.readdirSync(currentDir);
    list.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (stat.isFile() && path.extname(fullPath).toLowerCase() === '.mp3') {
        files.push(fullPath);
      }
    });
  }

  walk(dir);
  return files;
}

async function processMp3Files(files) {
  const lyricsDataArray = [];

  for (const file of files) {
    try {
      const audioStream = createReadStream(file);
      const metadata = await parseStream(audioStream, { mimeType: 'audio/mpeg' });
      console.log(metadata.common.lyrics)
      return;
      // 处理歌词
      if (metadata.common.lyrics) {
        const lyricsData = {
          music: path.basename(file),
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
        const imageFilePath = file.replace(/\.mp3$/, '.jpg');
        fs.writeFileSync(imageFilePath, imageBuffer);
        console.log(`生成图片文件: ${imageFilePath}`);
      } else {
        console.log(`未找到图片: ${file}`);
      }

    } catch (error) {
      console.error(`处理文件时出错: ${file}`, error.message);
    }
  }

  // 写入集中歌词数据的 JSON 文件
  const jsonFilePath = path.join(path.dirname(files[0]), 'lyrics_data.json');
  fs.writeFileSync(jsonFilePath, JSON.stringify(lyricsDataArray, null, 2));
  console.log(`生成集中歌词数据的 JSON 文件: ${jsonFilePath}`);
}

(async () => {
  try {
    // 获取当前模块的文件路径
    // const __filename = fileURLToPath(import.meta.url);
    // const outputDir = path.join(path.dirname(__filename), 'output');
    // const mp3Files = readFilesRecursively(outputDir);
    // await processMp3Files(mp3Files);
    await processMp3Files(['C:\\Users\\Administrator\\Desktop\\test_files\\hello-koa\\ffmpeg\\output\\1_jay\\02_-_wanmeizhuyi.mp3']);
  } catch (error) {
    console.error('主程序出错:', error.message);
  }
})();