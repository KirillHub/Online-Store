import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  export namespace Express {
    export interface Response {
      respond: (data: any) => void;
    }
    export interface Request {
      currentUser: string extends '' ? null : object;
      user: JwtPayload | string;
    }
  }
}
