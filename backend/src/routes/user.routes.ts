import { Router } from 'express';

import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from '@/controllers/userController';
import { requireAuth } from '@/middleware/authMiddleware';

export const userRouter = Router();

userRouter.post('/createUser', createUser);
userRouter.get('/getAllUsers', getAllUsers);
userRouter.get('/:id', requireAuth, getUserById);
userRouter.put('/:id', requireAuth, updateUserById);
userRouter.delete('/:id', requireAuth, deleteUserById);
