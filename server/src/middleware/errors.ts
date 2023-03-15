import { NextFunction, Request, Response } from 'express';
import pkg from 'lodash';
import { CustomError } from '../errors/customErrors.js';

export const handleError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error);
  const { pick } = pkg;
  const isErrorSafeForClient = error instanceof CustomError;

  const clientError = isErrorSafeForClient
    ? pick(error, ['message', 'code', 'status', 'data'])
    : {
        message: 'Something went wrong, please contact our support.',
        code: 'INTERNAL_ERROR',
        status: 500,
        data: {},
      };

  res.status(clientError.status).send({ error: clientError });
};
