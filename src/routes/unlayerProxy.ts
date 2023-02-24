const Router = require('koa-router');
import { v4 as uuidV4 } from 'uuid';
import { logger } from '../services/winstonHelper';
import {UnlayerService} from '../services/unlayerService';
import {SequelizeUtils} from '../utils/sequelize.utils';
import { unlayerAuthResponse, unlayerBaseResponse, unlayerSessionResponse } from '../module/module';
const router = new Router();

// 请求队列
const unlayerService = new UnlayerService();
const sequelize = new SequelizeUtils();

// 每隔 7 天 更新一次 unlayer token
setInterval(() => {
  const uuid = uuidV4().replace(/-/g, '');
  logger.info({uuid, message: '开始更新unlayer token'})
  unlayerService.authAndSessionApi(unlayerService.UNLAYER_PROJECT_ID, uuid).then(() => {
    logger.info({uuid, message: '更新unlayer token成功'})
  });
}, 7 * 24 * 60 * 60 * 1000)
/**
   * 获取unlayer登录信息
   * 如果有就更新，如果没有，就创建
   */
router.post("/unlayer/updateOrCreateToken", async (ctx: any, next: () => void) => {
  const uuid = uuidV4().replace(/-/g, '');
  const projectId = unlayerService.UNLAYER_PROJECT_ID
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  let [auth, sessionResponse] = await unlayerService.authAndSessionApi(projectId, uuid);

  ctx.response.body = sessionResponse;
});

router.post('/unlayer/auth', async (ctx: any, next: () => void) => {
  const uuid = uuidV4().replace(/-/g, '');
  const projectId = ctx.request.body.projectId
  let responseData: unlayerBaseResponse<unlayerAuthResponse> = {
    success: true,
    data: {
      token: ''
    }
  }
  if (typeof ctx.request.body === 'string') {
    try{
      ctx.request.body = JSON.parse(ctx.request.body)
    }catch (error) {
      responseData.success = false;
      responseData.message = `未传递正确的 projectId: ${projectId}`;
      logger.error({uuid, message: responseData.message, error});
      ctx.response.body = responseData
      return ;
    }
  }
  if (!projectId) {
    responseData.success = false;
    responseData.message = `未传递正确的 projectId: ${projectId}`;
    logger.error({uuid, message: responseData.message});
    ctx.response.body = responseData
    return ;
  }
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  let item = await sequelize.ClientTokenDb.findAll({
    where: {
      client_id: projectId
    }
  })
  
  if (item && item.length) {
    responseData.data.token = item[0].token;
    logger.info({uuid, message: '数据库拿取auth成功'})
    ctx.response.body = responseData;
  } else {
    let [auth, session] = await unlayerService.authAndSessionApi(projectId, uuid);
    ctx.response.body = auth;
  }
  logger.info({uuid, message: '请求auth成功'})
});

router.post('/unlayer/session', async (ctx: any, next: () => void) => {
  const uuid = uuidV4().replace(/-/g, '');
  const projectId = ctx.request.body.projectId;
  let subscription: any = {};
  let responseData: unlayerBaseResponse<unlayerSessionResponse> = {
    success: true,
    data: {
      token: '',
      project: {
        id: 0,
        name: '',
        storage: false,
        tools: [],
        fonts: [],
        mergeTags: [],
        overrideDefaultFeatures: {}
      },
      user: {
        id: '',
      },
      subscription,
      isAuthenticated: false,
    }
  }
  if (typeof ctx.request.body === 'string') {
    try{
      ctx.request.body = JSON.parse(ctx.request.body)
    } catch (error) {
      responseData.success = false;
      responseData.message = `未传递正确的 参数: ${projectId}`;
      logger.info({uuid, message: responseData.message, error})
      return ;
    }
  }
  if (!ctx.request.body || !projectId || !ctx.request.body.authorization) {
    responseData.success = false;
    responseData.message = `未传递正确的 参数: ${ctx.request.body}`;
    logger.info({uuid, message: responseData.message})
    return ;
  }
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  let item = await sequelize.AccessTokenDb.findAll({
    where: {
      client_id: projectId
    }
  })
  
  if (item && item.length) {
    responseData.data.token = item[0].token;
    let [unlayerProject, unlayerSubscription] = await Promise.all([
      sequelize.UnlayerProjectDb.findOne({
        where: {
          id: projectId
        }
      }),
      sequelize.UnlayerSubscriptionDb.findOne({
        where: {
          project_id: projectId
        }
      })
    ]);
    responseData.data.project.id = projectId;
    responseData.data.project.name = unlayerProject.name;
    responseData.data.project.storage = !!unlayerProject.storage;
    responseData.data.project.tools = JSON.parse(unlayerProject.tools);
    responseData.data.project.fonts = JSON.parse(unlayerProject.fonts);
    responseData.data.project.mergeTags = JSON.parse(unlayerProject.merge_tags);
    responseData.data.project.overrideDefaultFeatures = JSON.parse(unlayerProject.override_default_features);

    responseData.data.subscription.status = unlayerSubscription.status;
    responseData.data.subscription.entitlements = JSON.parse(unlayerSubscription.entitlements);
    responseData.data.subscription.items = JSON.parse(unlayerSubscription.items);
    responseData.data.subscription.addons = JSON.parse(unlayerSubscription.addons);

    responseData.data.isAuthenticated = !!unlayerSubscription.is_authenticated;
    
    logger.info({uuid, message: '请求session成功'})
    ctx.response.body = responseData;
  } else {
    let [auth, session] = await unlayerService.authAndSessionApi(projectId, uuid);
    ctx.response.body = session;
  }
  logger.info({uuid, message: '请求auth成功'})
});

router.post('/unlayer/clear', async (ctx: any, next: () => void) => {
  const uuid = uuidV4().replace(/-/g, '');
  const projectId = unlayerService.UNLAYER_PROJECT_ID
  await Promise.all([
    sequelize.ClientTokenDb.destroy({
      where: {
        client_id: projectId
      }
    }),
    sequelize.AccessTokenDb.destroy({
      where: {
        client_id: projectId
      }
    }),
    sequelize.UnlayerProjectDb.destroy({
      where: {
        id: projectId
      }
    }),
    sequelize.UnlayerSubscriptionDb.destroy({
      where: {
        project_id: projectId
      }
    })
  ]);
  logger.info({uuid, message: `${projectId} 所有数据清除成功`});
  ctx.response.body = {
    success: true,
    data: ''
  };
});

module.exports = router;