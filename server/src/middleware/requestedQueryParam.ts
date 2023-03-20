import { RequestPathError, RequestQueryParamError } from '../errors/customErrors.js';
import { Request } from 'express';
import { Type } from '../associations/modelAssociations.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { Type as TypeModel } from '../types/models.js';
import { Model, ModelStatic } from 'sequelize';

interface RequestedQueryParamOptions {
  model: ModelStatic<Model>;
  fields: string;
}

export const requestedQueryParam = (options: RequestedQueryParamOptions) => {
  return catchErrors(async (req, _res, next) => {
    const query = req.query;
    const error = new RequestQueryParamError(req.url);
    const queryParam = options.fields;

    if (query[queryParam]) {
      if (!queryParam) return next(error);

      const where = {
        [queryParam]: query[queryParam] as string,
      };
      const found = await options.model.findOne({ where });

      if (!found) {
        next(error);
      } else next();
    } else next(error);
  });
};
