import { Model, ModelStatic } from 'sequelize';
import { RequestPathError, RequestQueryParamError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';

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
      if (!queryParam) next(error);

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
