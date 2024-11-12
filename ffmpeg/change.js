const fs = require('fs');
const path = require('path');

// 指定输出文件夹路径和 JSON 输出文件路径
const outputFolder = 'output';
const jsonOutputFile = '1.json';

// 递归获取所有文件及其路径
function getAllFiles(dir) {
  const allFiles = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      allFiles.push(...getAllFiles(filePath));
    } else {
      allFiles.push(filePath);
    }
  });

  return allFiles;
}

// 递归修改文件和文件夹名称
function renameFilesAndFolders(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const oldPath = path.join(dir, file);
    const stat = fs.statSync(oldPath);

    // 生成新的文件或文件夹名称
    let newName = file.replace(/[^\x00-\x7F]/g, '_'); // 将非ASCII字符替换为下划线
    const newPath = path.join(dir, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`重命名: ${oldPath} -> ${newPath}`);
    }

    if (stat.isDirectory()) {
      renameFilesAndFolders(newPath);
    }
  });
}

// 更新 1.json 中的 fileUrl 字段
function updateJsonFile(jsonFile, fileMap) {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

  data.forEach(item => {
    const oldFileUrl = item.fileUrl;
    const newFileUrl = fileMap[oldFileUrl] || oldFileUrl;
    item.fileUrl = newFileUrl;
  });

  fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2));
  console.log(`JSON 文件已更新: ${jsonFile}`);
}

// 主函数
function main() {
  // 递归修改文件和文件夹名称
  renameFilesAndFolders(outputFolder);

  // 获取所有文件的新旧路径映射
  const allFiles = getAllFiles(outputFolder);
  const fileMap = {};

  allFiles.forEach(file => {
    const oldRelativePath = path.relative(outputFolder, file);
    const newRelativePath = oldRelativePath.replace(/[^\x00-\x7F]/g, '_');
    const oldFileUrl = `/static/${oldRelativePath}`;
    const newFileUrl = `/static/${newRelativePath}`;
    fileMap[oldFileUrl] = newFileUrl;
  });

  // 更新 1.json 中的 fileUrl 字段
  updateJsonFile(jsonOutputFile, fileMap);
}

// 执行主函数
main();