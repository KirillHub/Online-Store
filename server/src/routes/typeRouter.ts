import { Router } from 'express';
import { requestedQueryParam } from '../middleware/requestedQueryParam.js';
import { TypeController } from '../controllers/typeController.js';
import { Type } from '../types/models.js';
import { checkUserRole } from '../middleware/checkUserRole.js';

export const router = Router();
const typeController = new TypeController();

router.post('/', checkUserRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
router.delete(
  '/',
  requestedQueryParam({
    model: Type,
    fields: 'id',
  }),
  typeController.deleteType
);
