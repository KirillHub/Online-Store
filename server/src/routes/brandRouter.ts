import { Router } from 'express';
import { BrandController } from '../controllers/brandController.js';

export const router: Router = Router();
const brandController = new BrandController();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
// TODO: delete
