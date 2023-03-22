import { catchErrors } from '../errors/asyncCatch.js';
import { Request } from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { DeviceModel, DeviceInter } from '../types/request.js';
import { Files } from '../types/global.js';
import { Device, Brand, Type, DeviceInfo } from '../associations/modelAssociations.js';
import { RequestQueryParamError } from '../errors/customErrors.js';
import pkg from 'lodash';
import { DeviceInfo as ModelDeviceInfo } from '../types/models.js';

export class DeviceController {
  constructor() {}

  create = catchErrors(async (req: Request<{}, {}, DeviceModel>, res) => {
    let { name, price, brandId, typeId, info } = req.body;
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

    if (info) {
      const deviceInfo: ModelDeviceInfo[] = JSON.parse(info);

      deviceInfo.forEach(async i => {
        const devInfo = await DeviceInfo.create({
          title: i.title,
          description: i.description,
        });
        await devInfo.setDevice(device.id);
      });
    }

    return res.json(device);
  });

  getAll = catchErrors(async (req: Request<{}, {}, DeviceInter>, res) => {
    let { brandId, typeId, limit, page } = req.query as unknown as DeviceInter;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let where = {};

    if (brandId) where = { ...where, brandId: Number(brandId) };

    if (typeId) where = { ...where, typeId: Number(typeId) };

    if (typeId && brandId) {
      where = { ...where, brandId: Number(brandId), typeId: Number(typeId) };
    }

    const devices = await Device.findAndCountAll({
      where,
      include: [{ model: Type }, { model: Brand }],
      limit,
      offset,
    });

    return res.json(devices);
  });

  getOne = catchErrors(async (req, res, next) => {
    const error = new RequestQueryParamError(req.url);
    const { id } = req.params;
    if (id) {
      const device = await Device.findOne({
        where: { id } as any,
        include: [{ model: DeviceInfo, as: 'info' }],
      });
      return res.json(device);
    } else next(error);
  });

  delete = catchErrors(async (req, res, next) => {
    const { isNaN } = pkg;
    const query = req.query;
    const isNumberId = Number(query.id);
    const error = new RequestQueryParamError(req.url);

    if (isNumberId && isNaN(isNumberId)) return next(error);

    await Device.destroy({
      where: { id: Number(query.id) },
    });

    return res.json({ success: `type with ${query.id} - deleted` });
  });
}
