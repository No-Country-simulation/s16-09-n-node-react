import { Router } from 'express';

import { authRouter } from './auth.routes';
import { calendarV3Router } from './calendar_v3.routes';
import { calendarRouter } from './calendar.routes';
import { eventRouter } from './event.routes';
import { homeRouter } from './home.routes';
import { meetingRouter } from './meeting.routes';
import { userRouter } from './user.routes';

export const mainRouter = Router();

mainRouter.use('/', homeRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/meeting', meetingRouter);
mainRouter.use('/calendar', calendarRouter);
mainRouter.use('/calendar/v3', calendarV3Router);
mainRouter.use('/event', eventRouter);
mainRouter.use('/auth', authRouter);
