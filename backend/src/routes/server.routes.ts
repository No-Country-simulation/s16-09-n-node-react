import { join } from 'path';
import express, { Router } from 'express';
import favicon from 'serve-favicon';

import { projectRouter } from '@/api/project/router/project.router';
import { roleRouter } from '@/api/role/router/role.router';

import { authRouter } from './auth.routes';
import { calendarRouter } from './calendar.routes';
import { homeRouter } from './home.routes';
import { swaggerRouter } from './swagger.routes';
import { userRouter } from './user.routes';

export const serverRouter = Router();

serverRouter.use('/assets', express.static(join(__dirname, '../assets')));
serverRouter.use(favicon(join(__dirname, '../assets/ico/favicon.ico')));

serverRouter.use('/', homeRouter);
serverRouter.use('/users', userRouter);
serverRouter.use('/auth', authRouter);
serverRouter.use('/docs', swaggerRouter);
serverRouter.use('/roles', roleRouter);
serverRouter.use('/projects', projectRouter);
serverRouter.use('/calendar/v3', calendarRouter);
serverRouter.use('/auth', authRouter);
