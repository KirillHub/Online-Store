
import { catchErrors } from '../errors/asyncCatch.js';
import { Request, Response } from 'express';
import { Brand } from '../associations/modelAssociations.js';

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

  delete = catchErrors(async (req, _res) => {
    const brandId = req.query.id;

    // brandId ?
  });
}

