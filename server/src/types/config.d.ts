import { Iter } from './iterator.js';

export declare interface DevelopmentConfig extends BaseConfig {
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
}

export declare interface TestConfig extends BaseConfig {
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
}

export declare interface ProductionConfig extends BaseConfig {
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'mariadb';
}

export declare interface BaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
}

export declare type Config = {
  development?: DevelopmentConfig;
  test?: TestConfig;
  production?: ProductionConfig;
};
