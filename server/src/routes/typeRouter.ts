import { Router } from 'express';
import { TypeController } from '../controllers/typeController.js';
 
export const router = Router();
const typeController = new TypeController();

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.delete('/', typeController.deleteType);

