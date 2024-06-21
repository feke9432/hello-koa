import axios from 'axios';
import cheerio from 'cheerio';

interface NovelChapter {
  title: string;
  link: string;
}

export async function fetchNovelChapters(url: string): Promise<NovelChapter[]> {
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

export async function fetchChapterContent(url: string): Promise<string> {
  
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  
  const contentElement = $('#content');
  contentElement.find('p').remove();
  contentElement.find('b').remove();
  contentElement.find('div').remove();
  
  // 获取处理后的HTML
  const cleanedContent = contentElement.html() || '';

  return cleanedContent;
}