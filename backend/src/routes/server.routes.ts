import { join } from "path";
import express, { Router } from 'express';
import favicon from 'serve-favicon';

import { authRouter } from './auth.routes';
import { homeRouter } from './home.routes';
import { invalidRouter } from '@/api/invalid/router/invalid.router';
import { projectRouter } from '@/api/project/router/project.router';
import { swaggerRouter } from './swagger.routes';
import { userRouter } from './user.routes';
import { calendarRouter } from './calendar.routes'

export const serverRouter = Router();

const root = join(__dirname, '..');
serverRouter.use('/assets', express.static(join(root, 'assets')));
serverRouter.use(favicon(join(root, 'assets/ico/favicon.ico')));

serverRouter.use('/', homeRouter);
serverRouter.use('/users', userRouter);
serverRouter.use('/auth', authRouter);
serverRouter.use('/docs', swaggerRouter);
serverRouter.use('/projects', projectRouter);
serverRouter.use('/*', invalidRouter);
serverRouter.use('/calendar/v3', calendarRouter);
serverRouter.use('/auth', authRouter);
