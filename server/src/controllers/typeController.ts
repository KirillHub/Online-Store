import { RequestPathError, RequestQueryParamError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { Type } from '../associations/modelAssociations.js';
import pkg from 'lodash';

export class TypeController {
  constructor() {}

  create = catchErrors(async (req, res) => {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  });

  getAll = catchErrors(async (_req, res) => {
    const types = await Type.findAll();
    return res.json(types);
  });

  deleteType = catchErrors(async (req, res, next) => {
    const { isNaN } = pkg;
    const query = req.query;
    const isNumberId = Number(query.id);
    const error = new RequestQueryParamError(req.url);

    if (isNumberId && isNaN(isNumberId)) return next(error);

    await Type.destroy({
      where: { id: Number(query.id) },
    });

    res.json({ success: `type with ${query.id} - deleted` });
  });
}
