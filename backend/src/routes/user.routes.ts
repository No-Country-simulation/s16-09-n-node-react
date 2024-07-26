// ./routes/user.routes.ts
import { Router } from 'express';

import {
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from '@/controllers/user.controller';
import { requireAuth } from '@/middleware/auth.middleware';

export const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', requireAuth, getUserById);
userRouter.put('/:id', requireAuth, updateUserById);
userRouter.delete('/:id', requireAuth, deleteUserById);
