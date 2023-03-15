import { Router } from 'express';
import { UserController } from '../controllers/userController.js';

export const router = Router();
const userController = new UserController();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);

