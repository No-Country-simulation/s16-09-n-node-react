import { Router } from 'express';

import { createUser, getAllUsers } from '@/controllers/userController';

export const userRouter = Router();

userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/createUser', createUser);
