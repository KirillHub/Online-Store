import { RequestPathError } from '../errors/customErrors.js';
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
    let queryParam: any;
    const isNumberId = Number(query.id);
    const error = new RequestPathError(req.url);

    if (query.id && isNaN(isNumberId)) {
      return next(error);
    }

    if (query.id || query.name) {
      typeof query.id !== 'undefined'
        ? ((queryParam = query.id),
          await Type.destroy({
            where: { id: Number(query.id) },
          }))
        : ((queryParam = query.name),
          await Type.destroy({
            where: { name: query.name as string },
          }));

      res.json({ success: `type with ${queryParam} - deleted` });
    } else return next(error);
  });
}
