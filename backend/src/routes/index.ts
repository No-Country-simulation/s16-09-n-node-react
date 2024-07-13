import { Router } from 'express';

import { authRouter } from './auth.routes';
import { homeRouter } from './home.routes';
import { userRouter } from './user.routes';
import { calendarRouter } from './calendar.routes'

export const mainRouter = Router();

mainRouter.use('/', homeRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/calendar/v3', calendarRouter);
mainRouter.use('/auth', authRouter);
