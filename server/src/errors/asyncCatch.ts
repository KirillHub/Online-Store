import { Request, RequestHandler, Response } from 'express';
import { Multer } from 'multer';

export const catchErrors = (requestHandler: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<any> => {
    try {
      return requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
