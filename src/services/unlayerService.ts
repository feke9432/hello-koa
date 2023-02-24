import moment from 'moment';
import request from 'request';
import {SequelizeUtils} from '../utils/sequelize.utils';
import { logger } from './winstonHelper';
export class UnlayerService {
  // unlayer 账户的 project id
  UNLAYER_PROJECT_ID = 96487
  // clientToken 到期时间
  CLIENT_TOKEN_EXPIRATION = 7

  sequelizeUtils = new SequelizeUtils();

  requestApi(url: string, data: any) {
    return new Promise((resolve, reject) => {
      request.post(url, {
        headers: {
          'Content-Type': 'text/plain'
        },
        'body': JSON.stringify(data)
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      })
    })
  }

  authApi(projectId: number) {
    return this.requestApi(
      'https://api.unlayer.com/v2/editor/auth', 
      {"projectId":projectId,"authorization":""}) as Promise<UnlayerBaseResponse<UnlayerAuthResponse>>;
  }

  sessionApi(projectId: number, tokenStr: string) {
    return this.requestApi(
      'https://api.unlayer.com/v2/editor/session', 
      {"projectId": projectId,"domain":"localhost","authorization":"Bearer " + tokenStr}) as Promise<UnlayerBaseResponse<UnlayerSessionResponse>>
  }

  async authAndSessionApi(projectId: number, uuid: string): Promise<[UnlayerBaseResponse<UnlayerAuthResponse>, UnlayerBaseResponse<UnlayerSessionResponse>]> {
    let authResponse
    try {
      authResponse = await this.authApi(projectId);
      logger.info({uuid, message: '获取unlayer session token 成功'});
    } catch( error) {
      logger.error({uuid, message: 'auth api 请求失败', error});
      throw error;
    }

    let sessionResponse
    try {
      sessionResponse = await this.sessionApi(projectId, authResponse.data.token);
      logger.info({uuid, message: '获取unlayer session token 成功'});
    } catch( error) {
      logger.error({uuid, message: 'session api 请求失败', error});
      throw error;
    }

    await Promise.all([
      this.createOrUpdateByAuthApiDate(projectId, uuid, authResponse.data).catch(error => {
        logger.error({uuid, message: '获取或更新 auth 数据失败', error});
      }),
      this.createOrUpdateBySessionApiDate(projectId, uuid, sessionResponse.data).catch(error => {
        logger.error({uuid, message: '获取或更新 session 数据失败', error});
      })
    ]);
    return [authResponse, sessionResponse];
  }

  createOrUpdateBySessionApiDate (project_id: number, uuid: string, sessionResponse: UnlayerSessionResponse) {
    return Promise.all([
      this.createOrUpdateAccessToken(project_id, uuid, sessionResponse).then(() => {
        logger.info({uuid, message: 'unlayer Auth access token 入库 成功'});
      }),
      this.createOrUpdateUnlayerProject(project_id, sessionResponse).then(() =>{
        logger.info({uuid, message: 'unlayer project 入库 成功'});
      }),
      this.createOrUpdateUnlayerSubscription(project_id, sessionResponse).then(() => {
        logger.info({uuid, message: 'unlayer Subscription 入库 成功'});
      })
    ])
  }

  async createOrUpdateAccessToken(project_id: number, uuid: string, sessionResponse: UnlayerSessionResponse) {
    let baseOpt = {
      token: sessionResponse.token,
      expiration: moment().add(this.CLIENT_TOKEN_EXPIRATION, 'day'),
    }
    let options = {
      client_id: project_id,
      authentication_id: uuid,
      is_del: false,
      date_added: new Date(),
      ...baseOpt
    }
    let [dbObject, created] = await this.sequelizeUtils.AccessTokenDb.findOrCreate({
      where: {
        client_id: project_id
      },
      defaults: options
    });

    if (!created) {
      await dbObject.update({
        ...baseOpt,
        date_modified: new Date(),
      })
    }
  }

  async createOrUpdateUnlayerProject(project_id: number, sessionResponse: UnlayerSessionResponse) {
    const resProject = sessionResponse.project;
    let baseOpt = {
      name: resProject.name,
      storage: resProject.storage,
      tools: JSON.stringify(resProject.tools),
      fonts: JSON.stringify(resProject.fonts),
      merge_tags: JSON.stringify(resProject.mergeTags),
      override_default_features: JSON.stringify(resProject.overrideDefaultFeatures),
    }
    let options = {
      id: project_id,
      is_del: false,
      date_added: new Date(),
      ...baseOpt
    }
    let [dbObject, created] = await this.sequelizeUtils.UnlayerProjectDb.findOrCreate({
      where: {
        id: project_id
      },
      defaults: options
    });

    if (!created) {
      await dbObject.update({
        ...baseOpt,
        date_modified: new Date(),
      })
    }
  }

  async createOrUpdateUnlayerSubscription(project_id: number, sessionResponse: UnlayerSessionResponse) {
    const resSubscription = sessionResponse.subscription;
    let baseOpt = {
      status: resSubscription.status,
      entitlements: JSON.stringify(resSubscription.entitlements),
      items: JSON.stringify(resSubscription.items),
      addons: JSON.stringify(resSubscription.addons),
      is_authenticated: sessionResponse.isAuthenticated,
    }
    let options = {
      project_id,
      is_del: false,
      date_added: new Date(),
      ...baseOpt
    }
    let [dbObject, created] = await this.sequelizeUtils.UnlayerSubscriptionDb.findOrCreate({
      where: {
        project_id
      },
      defaults: options
    });

    if (!created) {
      await dbObject.update({
        ...baseOpt,
        date_modified: new Date(),
      })
    }
  }

  async createOrUpdateByAuthApiDate(project_id: number, uuid: string, authResponse: UnlayerAuthResponse) {
    let baseOpt = {
      token: authResponse.token,
      expiration: moment().add(this.CLIENT_TOKEN_EXPIRATION, 'day'),
    }
    let options = {
      client_id: project_id,
      authentication_id: uuid,
      ...baseOpt,
      date_added: new Date(),
    }
    let [ClientToken, created] = await this.sequelizeUtils.ClientTokenDb.findOrCreate({
      where: {
        client_id: project_id
      },
      defaults: options
    });

    if (!created) {
      await ClientToken.update({
        ...baseOpt,
        date_modified: new Date(),
      })
    }
  }
}

export interface UnlayerBaseResponse<T> {
  success: boolean;
  data: T
}

export interface UnlayerAuthResponse {
  token: string;
}

export interface UnlayerSessionResponse {
  isAuthenticated: boolean;
  project: any;
  subscription: any;
  token: string;
  user: {
    id: string;
  }
}
