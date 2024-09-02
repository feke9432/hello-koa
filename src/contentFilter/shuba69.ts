import { NovelChapter } from "../crawler";
const puppeteer = require('puppeteer');
// 69shuba
const menuEl = '#catalog';
const menuItemEl = '#catalog ul a';
const contentEl = '#txtnav';
const contentTitleEl = 'h1'

export class Shuba69Filter {
  async chapters (url: string) {
    let chapters: NovelChapter[] = [];
    const browser = await puppeteer.launch({
      headless: false, // 设置为 false 开启实体浏览器
      slowMo: 250, // 可选：增加延迟，便于观察操作过程
    });
    const page = await browser.newPage();
    console.log('Navigating to', url);
    await page.goto(url);
    console.log('Page navigation complete');

    try {
      await page.waitForSelector(menuEl, { timeout: 10000 });
      console.log('Menu element loaded');
    } catch (error) {
      console.error('Menu element not loaded within timeout:', error);
    }

    chapters = await page.$$eval(menuItemEl, (links: any[]) => links.map((link: any) => ({
      title: link.textContent,
      link: link.href
    })));
    return chapters;
  }

  async content(url: string){
    const browser = await puppeteer.launch({
      headless: false, // 设置为 false 开启实体浏览器
      slowMo: 250, // 可选：增加延迟，便于观察操作过程
    });
    const page = await browser.newPage();

    // 导航到小说页面
    await page.goto(url);

    // 等待页面加载完成
    await page.waitForSelector(contentEl, { timeout: 0 });


    // 获取章节标题和内容
    const content = await page.$eval(contentEl, (el:any) => el.textContent);
    
    // 获取处理后的HTML
    return content || '';
  }
}