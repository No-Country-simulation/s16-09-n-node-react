import { Router } from 'express';

import { authRouter } from './auth.routes';
import { homeRouter } from './home.routes';
import { userRouter } from './user.routes';

export const mainRouter = Router();

mainRouter.use('/', homeRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
