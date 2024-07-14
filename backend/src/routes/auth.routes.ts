// src/routes/auth.routes.ts
import { Router } from 'express';

import {
  loginUser,
  logoutUser,
  registerUser,
} from '@/controllers/auth.controller';

export const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
