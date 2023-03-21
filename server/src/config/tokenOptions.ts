import { SignOptions } from 'jsonwebtoken';

export const options: SignOptions = {
  expiresIn: '24h',
  issuer: 'your_issuer_name',
};
