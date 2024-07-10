import { Router } from 'express';

import { homeRouter } from './home.routes';
import { userRouter } from './user.routes';

export const mainRouter = Router();
mainRouter.use('/', homeRouter);
mainRouter.use('/user', userRouter);
