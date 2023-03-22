import pkg from 'lodash';
import { catchErrors } from '../errors/asyncCatch.js';
import { Brand } from '../associations/modelAssociations.js';
import { RequestQueryParamError } from '../errors/customErrors.js';


export class BrandController {
  constructor() {}

  create = catchErrors(async (req, res) => {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  });

  getAll = catchErrors(async (_req, res) => {
    const brands = await Brand.findAll();
    return res.json(brands);
  });

  delete = catchErrors(async (req, res, next) => {
    const { isNaN } = pkg;
    const query = req.query;
    const isNumberId = Number(query.id);
    const error = new RequestQueryParamError(req.url);

    if (isNumberId && isNaN(isNumberId)) return next(error);

    await Brand.destroy({
      where: { id: Number(query.id) },
    });

    res.json({ success: `type with ${query.id} - deleted` });
  });
}
