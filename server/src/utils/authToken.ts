import jwt, { SignOptions } from 'jsonwebtoken';
import pkg from 'lodash';
import { Request } from 'express';
import { InvalidTokenError } from '../errors/customErrors.js';

export const signToken = (payload: {}, options?: SignOptions) =>
  jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '24h',
    ...options,
  });

export const verifyToken = (token: string): { [key: string]: any } => {
  try {
    const { isPlainObject } = pkg;
    const payload = jwt.verify(token, process.env.JWT_SECRET!);

    if (isPlainObject(payload)) {
      return payload as { [key: string]: any };
    }
    throw new Error();
  } catch (error) {
    throw new InvalidTokenError();
  }
};

export const getAuthTokenFromRequest = (req: Request): string | null => {
  const header = req.get('Authorization') || '';
  const [bearer, token] = header.split(' ');
  return bearer === 'Bearer' && token ? token : null;
};
