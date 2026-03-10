const fs = require('fs');
const ProgressBar = require('progress');

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { getUrlMaps } = require('./handler_maps');

puppeteer.use(StealthPlugin());;

// 添加一个延迟函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeNovel(url, elItem, count) {
  console.log('开始抓取小说...', url)
  const browser = await puppeteer.launch({
    // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false, // 保持可见模式（调试时）
    args: [
     '--disable-blink-features=AutomationControlled',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--disable-infobars',
    '--no-sandbox',
    '--disable-setuid-sandbox'],
    ignoreHTTPSErrors: true,
    defaultViewport: null // 禁用默认视口
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // 添加时间统计
  let startTime = Date.now();
  let completed = 0;
  console.log('开启浏览器成功')

  // 导航到小说页面
  await page.goto(url);
  console.log('导航到小说页面')
  if (url.includes('www.quanben.io')) {
    console.log('特殊页面，模拟点击')
    // 模拟点击页面
    await page.click('#detail .more a');
    // 等待3秒后再进行下面的操作
    await delay(3000);
  }

  // 等待页面加载完成
  await page.waitForSelector(elItem.menuEl, { timeout: 0 });
  console.log('页面加载完成')
  await delay(2000);
  // 获取所有章节链接
  let chapterLinks = await page.$$eval(elItem.menuItemEl, links => {
    console.log('links', links)
    return links.map(link => link.href)
  });
  if (count) {
    chapterLinks.splice(0, count);
  }
  chapterLinks = chapterLinks.filter(item => {
    return item.includes(elItem.url)
  })
  let count1 = chapterLinks.length;
  console.log('获取章节链接', count1)
  const bar = new ProgressBar('[:bar] :percent 已爬取: :current/:total 章 剩余: :remaining 章 预计剩余: :times', {
    complete: '=',
    incomplete: ' ',
    width: 40,
    total: chapterLinks.length,
    remaining: chapterLinks.length,
    times: '00:00'
  });
  
  // 创建一个文件写入流
  const fileStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });
  console.log(`总共 ${chapterLinks.length} 章，开始爬取...`);
  for (const link of chapterLinks) {
    // 添加随机延迟，例如在1000ms到5000ms之间
    const randomDelay = Math.floor(Math.random() * 1000) + 3000;
    await delay(randomDelay);
    // 对每个章节进行爬取
    await page.goto(link);

    await delay(1000);
    // 等待章节内容加载完成
    await page.waitForSelector(elItem.contentEl, { timeout: 0 });


    // 获取章节标题和内容
    let title = await page.$eval(elItem.contentTitleEl, el => el.textContent);
    title = title.trim();
    let content = await page.$eval(elItem.contentEl, el => {
      // 克隆元素避免修改原始 DOM
      const clone = el.cloneNode(true); 
      
      // 删除所有 table 元素
      clone.querySelectorAll('table, h1, div').forEach(el => el.remove());
      
      // 返回处理后的纯文本
      return clone.textContent;
    });

    // console.log('章节爬取完成',`Title: ${title}`);
    content = title + '\n' + content;
      content.replaceAll('。', '。\n')
    // 写入文件
    fileStream.write(content + '\n');

    completed++;
    const remaining = chapterLinks.length - completed;

    // 计算剩余时间
    const elapsed = (Date.now() - startTime) / 1000;
    const avgTimePerChapter = elapsed / completed;
    const estimatedRemainingSeconds = avgTimePerChapter * remaining;
    
    // 更新进度条
    bar.tick({
      remaining: remaining,
      times: `${Math.floor(estimatedRemainingSeconds/60)}分${Math.round(estimatedRemainingSeconds%60)}秒`
    });

    // 添加异常处理防止进度条溢出
    if (completed >= chapterLinks.length) {
      bar.terminate();
    }
  }

  // 关闭文件流
  fileStream.end();

  await browser.close();

  console.log(`\n爬取完成！共爬取 ${completed} 章，总耗时 ${Math.floor((Date.now() - startTime)/1000)}秒`);
}

try {
  // 小说主页URL
  // const novelUrl = 'https://www.seebook.net/96_96999/';
  // const novelUrl = 'https://www.piaotia.com/html/15/15303/index.html';
  // const novelUrl = 'https://www.69shuba.com/book/56531/';
  // const novelUrl = 'https://www.69yd.top/articlecategroy/1xao.html'
  // const novelUrl = 'https://www.dbxsd.com/book/p15461/';
  // const novelUrl = 'https://www.beqege.cc/8232/';
  // const novelUrl = 'https://www.cpafarm.com/book/191870/';
  // const novelUrl = 'https://www.qidian.com/book/1045904862/';
  // const novelUrl = 'https://69shuba.tw/indexlist/28025/';
  // const novelUrl = 'https://www.nitianzw.com/19954/';
  const novelUrl = 'https://www.qidian.com/book/1046632840/';

  // 获取链接域名部分
  let elItem = getUrlMaps(novelUrl);
  scrapeNovel(novelUrl, elItem, 0);
 
} catch (error) {
  console.error(error)
}