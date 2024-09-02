import { filterFactory } from './contentFilter/filter';

export interface NovelChapter {
  title: string;
  link: string;
}

export async function fetchNovelChapters(url: string): Promise<NovelChapter[]> {
  console.log('开始获取章节链接', url)
  const chapters: NovelChapter[] = await filterFactory(url, 'chapters') as NovelChapter[];
  console.log('获取章节链接完成', chapters.length)
  return chapters;
}

export async function fetchChapterContent(url: string): Promise<string> {
  console.log('开始获取章节内容', url)
  const content: string = await filterFactory(url, 'content') as string;
  return content
}