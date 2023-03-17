
import { catchErrors } from '../errors/asyncCatch.js';
import { Request, RequestHandler } from 'express';
import multer, { Multer } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { BaseDeviceInter, DeviceInter } from '../types/request.js';
import { Files } from '../types/global.js';
import { Device } from '../associations/modelAssociations.js';

export class DeviceController {
  constructor() {}

  create = catchErrors(async (req: Request<{}, {}, DeviceInter>, res) => {
    const { name, price, brandId, typeId, info } = req.body;

    const { img } = req.files as unknown as Files;

    const fileName = uuidv4() + '.jpg';
    const __dirname = path.resolve();
    const fp = path.resolve(__dirname, 'static', fileName);
    img.mv(fp);

    const device = await Device.create({ name, price, img: fileName });
    return res.json(device);
  });

  getAll = catchErrors(async (req, _res) => {
    //  const devices = await Device.findAll();
    //  return res.json(devices);
    const { brandId, typeId }: BaseDeviceInter = req.body;
	 let devices;

	 if (!brandId && !typeId) return
  });

  getOne = catchErrors(async (_req, _res) => {});
}

