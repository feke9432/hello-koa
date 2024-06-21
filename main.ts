import Koa from 'koa';
import serve from 'koa-static';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { fetchNovelChapters, fetchChapterContent } from './src/crawler';
import { isValidUrl} from './src/utils';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(serve('public'));

// 在文件顶部引入Map以创建缓存
const chaptersCache = new Map<string, any>();

router.post('/novels/chapters', async (ctx) => {
  try {
    const { novelUrl } = ctx.request.body as any; // 从请求体中获取novelUrl

    isValidUrl(novelUrl);

    // 检查缓存中是否存在该novelUrl的章节数据
    let chapters = chaptersCache.get(novelUrl);
    if (!chapters) {
      console.log('从API获取数据');
      // 如果缓存中没有，则调用API获取数据
      chapters = await fetchNovelChapters(novelUrl);
      // 并将数据存入缓存
      chaptersCache.set(novelUrl, chapters);
    }

    ctx.body = chapters;
  } catch (error) {
    ctx.status = 400; // Bad Request
    ctx.body = { error: error }; // 只传递错误信息，避免泄露堆栈信息
  }
});

// 新接口：使用用户传入的连接获取章节内容
router.post('/chapter/content', async (ctx) => {
  try {
    const { chapterUrl } = ctx.request.body as { chapterUrl: string };
    
    isValidUrl(chapterUrl);

    // 获取章节内容
    const content = await fetchChapterContent(chapterUrl);

    ctx.body = { content };
  } catch (error) {
    ctx.status = 400; // Bad Request
    ctx.body = { error: error };
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));