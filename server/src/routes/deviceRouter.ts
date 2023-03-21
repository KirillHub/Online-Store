import { Router } from 'express';
import { requestedQueryParam } from '../middleware/requestedQueryParam.js';
import { DeviceController } from '../controllers/deviceController.js';
import { Device } from '../types/models.js';

export const router: Router = Router();
const deviceController = new DeviceController();

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get(
  '/:id',
  requestedQueryParam({
    model: Device,
    fields: 'id',
  }),
  deviceController.getOne
);
router.delete(
  '/',
  requestedQueryParam({
    model: Device,
    fields: 'id',
  }),
  deviceController.delete
);
