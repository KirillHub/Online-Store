import { Router } from 'express';
import { requestedQueryParam } from '../middleware/requestedQueryParam.js';
import { TypeController } from '../controllers/typeController.js';
import { Type } from '../types/models.js';

export const router = Router();
const typeController = new TypeController();

// router.use(foundType)

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.delete('/', requestedQueryParam({
	model: Type, fields: 'id'
}), typeController.deleteType);
