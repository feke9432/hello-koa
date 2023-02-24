import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

// function tryFunc() {
//   try {
//     sequelize.authenticate().then(() => {
//       console.log('Connection has been established successfully.');
//     });
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

export class SequelizeUtils {
  sequelize: Sequelize;
  sqConfig = {
    database: 'unlayer_db',
    username: 'unlayer_dev_user',
    password: 'Marketin@178964',
    host: '192.168.2.8'
  }

  UnlayerSubscriptionDb: ModelCtor<UnlayerSubscriptionModel>;
  UnlayerProjectDb: ModelCtor<UnlayerProjectModel>;
  AccessTokenDb: ModelCtor<ClientTokenModel>;
  ClientTokenDb: ModelCtor<ClientTokenModel>;

  constructor() {
    this.sequelize = this.initSequelize();
    this.UnlayerSubscriptionDb = this.makeUnlayerSubscriptionDb();
    this.UnlayerProjectDb = this.makeUnlayerProjectDb();
    this.AccessTokenDb = this.makeAccessTokenDb();
    this.ClientTokenDb = this.makeClientTokenDb();
  }
  initSequelize() {
    return new Sequelize(this.sqConfig.database, this.sqConfig.username, this.sqConfig.password, {
      host: this.sqConfig.host,
      /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
      dialect: 'mysql',
      // 去掉打印
      logging: false
    });
  }

  makeUnlayerSubscriptionDb(): ModelCtor<UnlayerSubscriptionModel> {
    return this.sequelize.define('unlayer_subscription', {
      project_id: {
          type: DataTypes.BIGINT({length: 20}),
          primaryKey: true
      }, // 项目ID (client ID)
      status: DataTypes.STRING(20), // 状态:  : ACTIVE  / INACTIVE / BANNED
      entitlements: DataTypes.JSON, // 项目基础配置
      items: DataTypes.JSON, 
      addons: DataTypes.JSON, 
      is_authenticated: DataTypes.BOOLEAN, 
      is_del: DataTypes.BOOLEAN, // 是否删除
      date_added: DataTypes.DATE,
      created_by: DataTypes.TINYINT({length: 11}),
      created_by_user: DataTypes.STRING,
      date_modified: DataTypes.DATE,
      modified_by: DataTypes.TINYINT({length: 11}),
      modified_by_user: DataTypes.STRING,
    }, {
      timestamps: false,
      freezeTableName: true,
    });
  }
  makeUnlayerProjectDb(): ModelCtor<UnlayerProjectModel> {
    return this.sequelize.define('unlayer_project', {
      id: {
          type: DataTypes.BIGINT({length: 20}),
          primaryKey: true
      }, // 项目ID (client ID)
      name: DataTypes.STRING, // 项目名称
      storage: DataTypes.TINYINT({length: 1}), // 存储标识
      tools: DataTypes.JSON, // 项目拥有的tools
      fonts: DataTypes.JSON, // 项目拥有的fonts
      merge_tags: DataTypes.JSON, // 项目拥有的merge_tags
      override_default_features: DataTypes.JSON, // 默认设置覆盖项
      is_del: DataTypes.BOOLEAN, // 是否删除
      date_added: DataTypes.DATE,
      created_by: DataTypes.TINYINT({length: 11}),
      created_by_user: DataTypes.STRING,
      date_modified: DataTypes.DATE,
      modified_by: DataTypes.TINYINT({length: 11}),
      modified_by_user: DataTypes.STRING,
    }, {
      timestamps: false,
      freezeTableName: true,
    });
  }
  makeAccessTokenDb(): ModelCtor<ClientTokenModel> {
    return this.sequelize.define('oauth_access_token', {
      client_id: {
          type: DataTypes.BIGINT,
          primaryKey: true
      }, // 项目ID 
      token: DataTypes.STRING, // access_token
      authentication_id: DataTypes.STRING(32), // 与oauth_client_token.uuid关联
      expiration: DataTypes.DATE, // 到期时间
      is_del: DataTypes.BOOLEAN, // 是否删除
      date_added: DataTypes.DATE,
      created_by: DataTypes.TINYINT({length: 11}),
      created_by_user: DataTypes.STRING,
      date_modified: DataTypes.DATE,
      modified_by: DataTypes.TINYINT({length: 11}),
      modified_by_user: DataTypes.STRING,
    }, {
      timestamps: false,
      freezeTableName: true,
    });
  }
  makeClientTokenDb(): ModelCtor<ClientTokenModel> {
    return this.sequelize.define('oauth_client_token', {
      client_id: {
          type: DataTypes.BIGINT,
          primaryKey: true
      },// 项目ID 
      token: DataTypes.STRING, // client_token
      authentication_id: DataTypes.STRING(32), // uuid用来关联access token
      expiration: DataTypes.DATE, // 到期时间
      is_del: DataTypes.BOOLEAN, // 是否删除
      date_added: DataTypes.DATE,
      created_by: DataTypes.TINYINT({length: 11}),
      created_by_user: DataTypes.STRING,
      date_modified: DataTypes.DATE,
      modified_by: DataTypes.TINYINT({length: 11}),
      modified_by_user: DataTypes.STRING,
    }, {
      timestamps: false,
      // 拒绝表名加s （oauth_client_token => oauth_client_tokens）
      freezeTableName: true,
    });
  }
}

export interface DbBaseModel extends Model {
  is_del: boolean,
  date_added: Date,
  created_by: number,
  created_by_user: string,
  date_modified: Date,
  modified_by: number,
  modified_by_user: string,
}

export interface ClientTokenModel extends DbBaseModel {
  client_id: number,
  token: string, 
  authentication_id: string,
  expiration: Date,
}

export interface UnlayerProjectModel extends DbBaseModel {
  id: number,
  name: string,
  storage: number, 
  tools: string, 
  fonts: string, 
  merge_tags: string, 
  override_default_features: string,
}

export interface UnlayerSubscriptionModel extends DbBaseModel {
  project_id: number, 
  status: string, // 状态:  : ACTIVE  / INACTIVE / BANNED
  entitlements: string, 
  items: string, 
  addons: string, 
  is_authenticated: number, 
}