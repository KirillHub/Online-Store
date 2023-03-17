import { Type } from './../models/Type';

declare global {
  declare namespace Express {
    export interface Response {
      respond: (data: any) => void;
    }
    export interface Request {
      // currentUser: import('entities').User;
      foundType?: Model<any, any> | null;
    }
  }
}
