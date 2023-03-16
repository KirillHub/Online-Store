import { catchErrors } from '../errors/asyncCatch.js';
import { RequestHandler } from 'express';
import multer, { Multer } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Device } from '../models/Device.js';

interface Files {
  img: {
    mv: (path: string) => void;
  };
}

export class DeviceController {
  constructor() {}

  create = catchErrors(async (req, res) => {
    const { name, price, brandId, typeId, info } = req.body;

    const { img } = req.files as unknown as Files; //TODO:

    const fileName = uuidv4() + '.jpg';
    const __dirname = path.resolve();
    const fp = path.resolve(__dirname, 'static', fileName);
	 console.log(fp);
    img.mv(fp);

    //  return res.json({ message: 'hello' });
    //  multer.diskStorage({});

    const device = await Device.create({ name, price, brandId, typeId, img: fileName });
    return res.json(device);
  });

  getAll = catchErrors(async (_req, res) => {
    //  console.log(__dirname);

    //  img.mv(filePath);

    //  console.log(fp);

    const devices = await Device.findAll();
    return res.json(devices);
  });

  getOne = catchErrors(async (_req, _res) => {});
}
