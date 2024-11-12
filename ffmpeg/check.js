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
  for (const file of files) {
    try {
      const audioStream = createReadStream(file);
      const metadata = await parseStream(audioStream, { mimeType: 'audio/mpeg' });

      // 处理歌词
      if (metadata.common.lyrics) {
        const lrcContent = metadata.common.lyrics[0].text;
        const lrcFilePath = file.replace(/\.mp3$/, '.lrc');
        fs.writeFileSync(lrcFilePath, lrcContent);
        console.log(`生成 LRC 文件: ${lrcFilePath}`);
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
}

(async () => {
  try {
    // 获取当前模块的文件路径
    const __filename = fileURLToPath(import.meta.url);
    const outputDir = path.join(path.dirname(__filename), 'output');
    const mp3Files = readFilesRecursively(outputDir);
    await processMp3Files(mp3Files);
    // await processMp3Files(['C:\\Users\\Administrator\\Desktop\\test_files\\hello-koa\\ffmpeg\\output\\1%20jay\\01%20-%20%E5%8F%AF%E7%88%B1%E5%A5%B3%E4%BA%BA.mp3']);
  } catch (error) {
    console.error('主程序出错:', error.message);
  }
})();