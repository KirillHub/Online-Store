import { Router } from 'express';
import { requestedQueryParam } from '../middleware/requestedQueryParam.js';
import { BrandController } from '../controllers/brandController.js';
import { Brand } from '../types/models.js';
import { checkUserRole } from '../middleware/checkUserRole.js';

export const router: Router = Router();
const brandController = new BrandController();

router.post('/', checkUserRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
router.delete(
  '/',
  requestedQueryParam({
    model: Brand,
    fields: 'id',
  }),
  brandController.delete
);
