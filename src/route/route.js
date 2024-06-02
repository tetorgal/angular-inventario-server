import { Router } from 'express';
import { createUser, updateUser } from '../controller/userController.js';

const router = Router();

router.post('/users', createUser);
router.patch('/users/:id', updateUser);

export default router;