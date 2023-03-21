import jwt, { SignOptions } from 'jsonwebtoken';

export const signToken = (payload: {}, options?: SignOptions) =>
   jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '24h',
    ...options,
  });
