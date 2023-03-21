import { catchErrors } from '../errors/asyncCatch.js';
import { Request, RequestHandler } from 'express';
import multer, { Multer } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { BaseDeviceInter, DeviceModel } from '../types/request.js';
import { Files } from '../types/global.js';
import { Device } from '../associations/modelAssociations.js';
import { RequestQueryParamError } from '../errors/customErrors.js';
import pkg from 'lodash';
import { Brand, Device as TDevice, Type } from '../types/models.js';

export class DeviceController {
  constructor() {}

  create = catchErrors(async (req: Request<{}, {}, DeviceModel>, res) => {
    const { name, price, brandId, typeId, info } = req.body;

    const { img } = req.files as unknown as Files;

    const fileName = uuidv4() + '.jpg';
    const __dirname = path.resolve();
    const fp = path.resolve(__dirname, 'static', fileName);
    img.mv(fp);

    const device = await Device.create({
      name,
      price,
      img: fileName,
    });

    await device.setBrand(brandId);
    await device.setType(typeId);

    return res.json(device);
  });

  getAll = catchErrors(async (req: Request<{}, {}, BaseDeviceInter>, res) => {
    const brandId = req.query.brandId as unknown as number;
    const typeId = req.query.typeId as unknown as number;

    let where = {};

    if (brandId) where = { ...where, brandId: Number(brandId) };

    if (typeId) where = { ...where, typeId: Number(typeId) };

    if (typeId && brandId) {
      where = { ...where, brandId: Number(brandId), typeId: Number(typeId) };
    }

    const devices = await Device.findAll({
      where,
      include: [{ model: Type }, { model: Brand }],
    });

    /*
    if (!brandId && !typeId) {
      devices = await Device.findAll();
    }

    if (brandId && !typeId) {
      devices = await Device.findAll({ where: { brandId: Number(brandId) } });
    }

    if (!brandId && typeId) {
      devices = await Device.findAll({ where: { typeId: Number(typeId) } });
    }

    if (brandId && typeId) {
      devices = await Device.findAll({
        where: { typeId: Number(typeId), brandId: Number(brandId) },
      });
    }
 */

    return res.json(devices);
    //  const { brandId, typeId }: BaseDeviceInter = query;
  });

  getOne = catchErrors(async (_req, _res) => {});
  delete = catchErrors(async (req, res, next) => {
    const { isNaN } = pkg;
    const query = req.query;
    const isNumberId = Number(query.id);
    const error = new RequestQueryParamError(req.url);

    if (isNumberId && isNaN(isNumberId)) return next(error);

    await Device.destroy({
      where: { id: Number(query.id) },
    });

    res.json({ success: `type with ${query.id} - deleted` });
  });
}
