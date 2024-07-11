// src/routes/auth.routes.ts
import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '@/controllers/authController';

export const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
