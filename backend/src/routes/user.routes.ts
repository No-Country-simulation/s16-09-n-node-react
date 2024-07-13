import { Router } from 'express';

import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from '@/controllers/user.controller';
import { requireAuth } from '@/middleware/auth.middleware';

export const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', requireAuth, getUserById);
userRouter.put('/:id', requireAuth, updateUserById);
userRouter.delete('/:id', requireAuth, deleteUserById);
