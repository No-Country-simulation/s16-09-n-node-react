import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import express, { Router } from 'express';
import favicon from 'serve-favicon';

import { projectRouter } from '@/api/project/router/project.router';
import { roleRouter } from '@/api/role/router/role.router';
import clerkRoutes from '@/clerk/clerk.route';
import milestonesRouter from '@/milestones/milestones.routes';

import { authRouter } from './auth.routes';
import { calendarRouter } from './calendar.routes';
import { homeRouter } from './home.routes';
import { swaggerRouter } from './swagger.routes';
import { userRouter } from './user.routes';

export const serverRouter = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

serverRouter.use(express.static(join(__dirname, '../../public')));
serverRouter.use(favicon(join(__dirname, '../../public/ico/favicon.ico')));

serverRouter.use('/', homeRouter);
serverRouter.use('/users', userRouter);
serverRouter.use('/auth', authRouter);
serverRouter.use('/docs', swaggerRouter);
serverRouter.use('/roles', roleRouter);
serverRouter.use('/projects', projectRouter);
serverRouter.use('/calendar/v3', calendarRouter);
serverRouter.use('/auth', authRouter);
serverRouter.use('/milestone', milestonesRouter);
serverRouter.use('/clerk', clerkRoutes);
