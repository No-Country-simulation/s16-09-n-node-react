import { Router } from 'express';

import { createUser, getAllUsers } from '@/controllers/userController';
import { requireAuth } from '@/middleware/authMiddleware';

export const userRouter = Router();

userRouter.get('/getAllUsers', requireAuth, getAllUsers);
userRouter.post('/createUser', createUser);
