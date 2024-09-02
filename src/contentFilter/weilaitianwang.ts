import { NovelChapter } from "../crawler";
import * as cheerio from 'cheerio';
import axios from "axios";

export class WeilaitianwangFilter {
  async chapters (url: string) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const chapters: NovelChapter[] = [];

    $('#list dd a').each((_, element) => {
      const title = $(element).text();
      const link = $(element).attr('href');
      if (title && link) {
        chapters.push({ title, link });
      }
    });
    return chapters;
  }

  async content(url: string){
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const contentElement = $('#content');
    contentElement.find('p').remove();
    contentElement.find('b').remove();
    contentElement.find('div').remove();

    // 获取处理后的HTML
    return contentElement.html() || '';
  }
}