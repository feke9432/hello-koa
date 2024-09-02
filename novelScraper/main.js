const puppeteer = require('puppeteer');
const fs = require('fs');

// seebook
// const menuEl = '#zhangjie';
// const menuItemEl = '#zhangjie a';
// const contentEl = '#neirong';
// const contentTitleEl = 'h1'

// 69shuba
const menuEl = '#catalog';
const menuItemEl = '#catalog ul a';
const contentEl = '#txtnav';
const contentTitleEl = 'h1'

// 添加一个延迟函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeNovel(url) {
  console.log('开始抓取小说...', url)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('开启浏览器成功')

  // 导航到小说页面
  await page.goto(url);
  console.log('导航到小说页面')

  // 等待页面加载完成
  await page.waitForSelector(menuEl, { timeout: 0 });
  console.log('页面加载完成')

  // 获取所有章节链接
  const chapterLinks = await page.$$eval(menuItemEl, links => links.map(link => link.href));

  // 反转数组，使链接按倒序排列
  // chapterLinks.reverse();
  console.log('获取所有章节链接', chapterLinks)

  // 创建一个文件写入流
  const fileStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });

  for (const link of chapterLinks) {
    // 添加随机延迟，例如在1000ms到3000ms之间
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    await delay(randomDelay);
    console.log('开始抓取章节链接', link)
    // 对每个章节进行爬取
    await page.goto(link);

    console.log('导航到章节链接')

    // 等待章节内容加载完成
    await page.waitForSelector(contentEl, { timeout: 0 });

    console.log('章节内容加载完成')

    // 获取章节标题和内容
    const title = await page.$eval(contentTitleEl, el => el.textContent);
    const content = await page.$eval(contentEl, el => el.textContent);

    console.log('章节爬取完成',`Title: ${title}`);
    // console.log(`Content: ${content}`);

    // 写入文件
    fileStream.write(title + '\n' +content + '\n');

    
  }

  // 关闭文件流
  fileStream.end();

  await browser.close();
  console.log('抓取完成')
}

async function scrapeNover_bypage(url) {
  console.log('开始抓取小说...', url)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
}

try {
  // 小说主页URL
  const novelUrl = 'https://69shuba.cx/book/76892/';
  // const novelUrl = 'https://www.seebook.net/96_96999/';
  scrapeNovel(novelUrl);
} catch (error) {
  console.error(error)
}