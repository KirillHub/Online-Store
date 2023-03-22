import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { InvalidTokenError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';
// import { TUser } from '../types/request.js';

export declare interface TUser extends Request {
  user: string;
}

/// <reference path="../types/express.d.ts" />

export const authenticateUser = catchErrors(async (req, _res, next) => {
  const token = getAuthTokenFromRequest(req);

  if (req.method === 'OPTIONS') next();

  if (!token) throw new InvalidTokenError('Authentication token not found.');

  const decoder = jwt.verify(token, process.env.JWT_SECRET!); 
  req.user = decoder;
  next()
  //   req.user  = decoder;
  //   req.currentUser = decoder											  //! see
});

const getAuthTokenFromRequest = (req: Request): string | null => {
  const header = req.get('Authorization') || '';
  const [bearer, token] = header.split(' ');
  return bearer === 'Bearer' && token ? token : null;
};
