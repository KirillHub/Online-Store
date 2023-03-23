import { Request, NextFunction } from 'express';
import { InvalidTokenError } from '../errors/customErrors.js';
import { getAuthTokenFromRequest, verifyToken } from './authToken.js';

export const checkUser = async (req: Request, next: NextFunction) => {
  const token = getAuthTokenFromRequest(req);
  if (req.method === 'OPTIONS') next();

  if (!token) throw new InvalidTokenError('Authentication token not found.');

  const userDecodedData = verifyToken(token);
  if (!userDecodedData) throw new InvalidTokenError('Authentication token is invalid.');

  return userDecodedData;
};
