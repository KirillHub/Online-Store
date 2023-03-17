declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_DIALECT: string;
    //  JWT_SECRET: string;
  }
}
