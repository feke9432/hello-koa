# 项目说明
基于koa搭建的html转图片的node服务
# 生成图片
### 1、前端调用saveImage接口并传递html链接
http://127.0.0.1:8099/saveImage?pageUrl=https://ma-sihai-dev.marketin.cn/page/file/preview/html?tenantId=145&fileName=202211/b4009add300d4559850682f1ffdbc464.html&mode=email

### 2、后端html转图片
通过puppeteer插件调用谷歌浏览器打开html，screenshot方法生成图片存贮在image文件夹下，上传云平台后删除

### 3、图片上传云平台
通过aws-sdk上传图片到亚马逊云平台，并返回图片地址

# 倒计时 gif 生成图片

### 1、前端调用 countDown 接口

### 2、图片上传云平台

通过 aws-sdk 上传图片到亚马逊云平台，并返回图片地址

### 3、node-canvas 依赖插件包安装

mac
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman

cd lib/node-canvas
npm install
cd ../../

# 运行
```
npm install
npm run dev
```

# 部署
```
deploy.sh
```

## 准备环境配置

deploy/dev
deploy/stg
deploy/prod

## 启动命令

```
npm install 
export ENV_NAME=dev
//ENV_NAME=stg
//ENV_NAME=prod

# 启动服务
ENV_NAME=$ENV_NAME npm run deploy

```

# 返回数据到前端

// 返回代码片段
ctx.response.body = "<b>返回文案</b>"
// 返回 json 数据
ctx.response.body = { name: "yang", age: 18 }

# 测试模版url
https://ma-sihai-dev.marketin.cn/page/file/preview/html?tenantId=145&fileName=202211/b4009add300d4559850682f1ffdbc464.html&mode=email


# 接口测试

## 跨域

```
ctx.set('Access-Control-Allow-Origin', '*');
ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
```