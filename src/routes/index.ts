const Router = require('koa-router');
const router = new Router();

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);

/**
 * 路由注册
 */
files.filter((file: string) => file.endsWith('.ts')).forEach((file: string) => {
  const file_name = file.substring(0, file.length - 3);
  const file_entity = require(path.join(__dirname, file));
  if(file_name !== 'index') {
    router.use(file_entity.routes());
  }
});

module.exports = router;