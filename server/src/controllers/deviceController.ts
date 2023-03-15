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

    /*
	! чекни это
	  path: 'C:\\C:\\Users\\Kirill\\Desktop\\%D0%BF%D1%80%D0%BE%D0%B3%D0%B0\\API-learning\\online-store-postgreSQL\\server\\src\\controllers\\static\\9b966517-eb71-4580-adfc-043e4de39fe0.jpg'
	*/

    const fileName = uuidv4() + '.jpg';
    const rootDir = 'C:\\Users\\Kirill\\project';
    //  const filePath =  path.join(new URL(import.meta.url).pathname, '..', 'static', fileName);
    const filePath = path.resolve(rootDir, 'src', '..', 'static', fileName);

    img.mv(filePath);
    /*
	 let fileName = uuidv4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
	*/

    const device = await Device.create({ name, price, brandId, typeId, img: fileName });

    return res.json(device);
    //  multer.diskStorage({});
  });

  getAll = catchErrors(async (_req, _res) => {});

  getOne = catchErrors(async (_req, _res) => {});
}
