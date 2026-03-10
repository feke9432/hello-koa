const fs = require('fs');
const ProgressBar = require('progress');
const url = require('url');

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());;

const urlMaps = {
  'www.piaotia.com': {
    menuEl: '.centent',
    menuItemEl: '.centent ul a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.piaotia.com'
  },
  'www.seebook.net': {
    menuEl: '#zhangjie',
    menuItemEl: '#zhangjie a',
    contentEl: '#neirong',
    contentTitleEl: 'h1',
    url: 'www.seebook.net'
  },
  '69shuba.cx': {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '#txtnav',
    contentTitleEl: 'h1',
      url: '69shuba.cx'
  },
  "www.69shuba.com": {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '.txtnav',
    contentTitleEl: 'h1',
    url: 'www.69shuba.com'
  },
  "www.quanben.io": {
    menuEl: '.content_more .list3',
    menuItemEl: '.content_more .list3 a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.quanben.io'
  },
  "www.dbxsd.com": {
    menuEl: '#all-chapter .panel-body .row',
    menuItemEl: '#all-chapter a',
    contentEl: '#cont-body',
    contentTitleEl: 'h1',
    url: 'www.dbxsd.com'
  },
  "www.beqege.cc": {
    menuEl: '#list',
    menuItemEl: '#list a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.beqege.cc'
  },
  "www.cpafarm.com": {
    menuEl: '.listmain',
    menuItemEl: '.listmain a',
    contentEl: '#chaptercontent',
    contentTitleEl: 'h1',
    url: 'www.cpafarm.com'
  },
  "www.qidian.com": {
    menuEl: '#allCatalog',
    menuItemEl: '#allCatalog .chapter-item a',
    contentEl: 'main',
    contentTitleEl: 'h1',
    url: 'www.qidian.com'
  },
  "www.69yd.top": {
    menuEl: '#chapter-list-grid',
    menuItemEl: '#chapter-list-grid a',
    contentEl: '.reading-content',
    contentTitleEl: 'h2',
    url: 'www.69yd.top'
  },
  "69shuba.tw": {
    menuEl: '.last9',
    menuItemEl: '.last9 a',
    contentEl: '#nr1',
    contentTitleEl: 'h1',
    url: '69shuba.tw'
  },
  "www.nitianzw.com": {
    menuEl: '#play_0',
    menuItemEl: '#play_0 a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.nitianzw.com'
  },
  "twkan.com": {
    menuEl: '#allchapter',
    menuItemEl: '#allchapter a',
    contentEl: '#txtcontent0',
    contentTitleEl: 'h1',
    url: 'twkan.com'
  },
}

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
    // console.log('开始抓取章节链接', link)
    // 对每个章节进行爬取
    await page.goto(link);

    // console.log('导航到章节链接')
    await delay(1000);
    // 等待章节内容加载完成
    await page.waitForSelector(elItem.contentEl, { timeout: 0 });

    // console.log('章节内容加载完成')

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
    // console.log(`Content: ${content}`);
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

async function scrapeNover_bypage(url) {
  console.log('开始抓取小说...', url)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
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
  const novelUrl = 'https://www.qidian.com/book/1047797194/';
  // 获取链接域名部分
  const parsedUrl = new URL(novelUrl);
  let elItem = urlMaps[parsedUrl.hostname];
  scrapeNovel(novelUrl, elItem,0);
  // const novelUrl = 'https://www.quanben.io/n/guizeguaitan-wodejiarenbuzhengchang/list.html';
  // let elItem = urlMaps['www.quanben.io'];
  // scrapeNovel(novelUrl, elItem, 'www.quanben.io');
} catch (error) {
  console.error(error)
}