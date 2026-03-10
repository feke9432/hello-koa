const puppeteer = require('puppeteer');
const fs = require('fs');
const ProgressBar = require('progress');

// 站点配置独立为常量
const SITE_CONFIGS = {
  'www.piaotia.com': {
    menuEl: '.centent',
    menuItemEl: '.centent ul a',
    contentEl: '#content',
    contentTitleEl: 'h1'
  },
  'www.seebook.net': {
    menuEl: '#zhangjie',
    menuItemEl: '#zhangjie a',
    contentEl: '#neirong',
    contentTitleEl: 'h1'
  },
  '69shuba.cx': {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '#txtnav',
    contentTitleEl: 'h1'
  },
  "www.69shuba.com": {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '.txtnav',
    contentTitleEl: 'h1'
  },
  "www.quanben.io": {
    menuEl: '.content_more .list3',
    menuItemEl: '.content_more .list3 a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    requiresClick: true,
    clickSelector: '#detail .more a'
  }
};

// 添加延迟函数（带随机因子防封禁）
function delay(minMs = 1000, maxMs = 5000) {
  const duration = Math.floor(Math.random() * (maxMs - minMs)) + minMs;
  return new Promise(resolve => setTimeout(resolve, duration));
}

// 带重试机制的内容获取
async function fetchContentWithRetry(page, selector, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await page.$eval(selector, processContent);
    } catch (err) {
      if (attempt === maxRetries) throw err;
      console.warn(`[重试 ${attempt}/${maxRetries}] 内容获取失败: ${err.message}`);
      await delay(2000 * attempt);
    }
  }
}

// 内容处理逻辑集中化
function processContent(el) {
  const clone = el.cloneNode(true);
  
  // 一次性删除所有不需要的元素
  clone.querySelectorAll('table, h1, div, script, style, iframe, noscript')
    .forEach(node => node.remove());
    
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

async function scrapeNovel(url, config, filterUrl) {
  console.log(`开始抓取小说: ${url}`);
  const startTime = Date.now();
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    console.log('导航到小说主页...');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // 特殊站点处理
    if (config.requiresClick) {
      await page.click(config.clickSelector);
      await delay(3000);
    }
    
    console.log('加载目录...');
    await page.waitForSelector(config.menuEl, { timeout: 60000 });
    
    // 获取章节链接
    let chapterLinks = await page.$$eval(config.menuItemEl, 
      links => links.map(link => link.href)
    );
    
    chapterLinks = chapterLinks.filter(link => link.includes(filterUrl));
    console.log(`发现 ${chapterLinks.length} 个章节`);
    
    // 进度条配置
    const bar = new ProgressBar('[:bar] :percent 剩余:etas 总预计: :times :total章节', {
      complete: '=',
      incomplete: ' ',
      width: 40,
      total: chapterLinks.length,
      times: '00:00'
    });
    
    // 文件流处理
    const outputFile = `novel_${Date.now()}.txt`;
    const fileStream = fs.createWriteStream(outputFile, { encoding: 'utf8' });
    
    let completed = 0;
    for (const link of chapterLinks) {
      try {
        await delay(); // 防封禁随机延迟
        
        await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector(config.contentEl, { timeout: 30000 });
        
        const title = await page.$eval(config.contentTitleEl, el => el.textContent.trim());
        const content = await fetchContentWithRetry(page, config.contentEl);
        
        fileStream.write(`${title}\n${content}\n\n`);
        
        // 进度更新（每5章更新一次时间预估）
        completed++;
        if (completed % 5 === 0 || completed === chapterLinks.length) {
          const elapsed = (Date.now() - startTime) / 1000;
          const estimatedTotal = (elapsed / completed) * chapterLinks.length;
          bar.tick(completed - bar.curr, {
            times: `${Math.floor(estimatedTotal/60)}分${Math.round(estimatedTotal%60)}秒`
          });
        } else {
          bar.tick(1);
        }
      } catch (chapterErr) {
        console.error(`章节处理失败: ${chapterErr.message}`);
        bar.tick(1, { times: '错误跳过' });
      }
    }
    
    console.log(`抓取完成! 保存至: ${outputFile}`);
    fileStream.end();
  } catch (mainErr) {
    console.error('主流程错误:', mainErr);
  } finally {
    await browser.close();
    console.log(`总耗时: ${((Date.now() - startTime)/1000).toFixed(1)}秒`);
  }
}

// 主执行逻辑
(async () => {
  try {
    const novelUrl = 'https://www.69shuba.com/book/77119/';
    await scrapeNovel(novelUrl, SITE_CONFIGS['www.69shuba.com'], 'www.69shuba.com');
  } catch (err) {
    console.error('全局错误:', err);
    process.exit(1);
  }
})();