import { catchErrors } from '../errors/asyncCatch.js';
import { Type } from '../models/Type.js';

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

  deleteType = catchErrors(async (req, res, _next) => {
    let queryParam;
    const query = req.query;

    if (query.id || query.name) {
      typeof query.id !== 'undefined' ? (queryParam = query.id) : (queryParam = query.name);

      res.json({ success: `type with ${queryParam} - deleted` });
    }
    //  return next(ApiError.badRequest('No product type found with this type'));
  });
}

// module.exports = new TypeController();
