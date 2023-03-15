import { Router } from 'express';
import { DeviceController } from '../controllers/deviceController.js';

export const router: Router = Router();
const deviceController = new DeviceController();

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

