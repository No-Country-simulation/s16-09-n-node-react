import { join } from "path";
import express, { Router } from 'express';
import favicon from 'serve-favicon';

import { authRouter } from './auth.routes';
import { homeRouter } from './home.routes';
import { invalidRouter } from '@/api/invalid/router/invalid.router';
import { projectRouter } from '@/api/project/router/project.router';
import { swaggerRouter } from './swagger.routes';
import { userRouter } from './user.routes';

export const mainRouter = Router();

const root = join(__dirname, '..');
mainRouter.use('/assets', express.static(join(root, 'assets')));
mainRouter.use(favicon(join(root, 'assets/ico/favicon.ico')));

mainRouter.use('/', homeRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/docs', swaggerRouter);
mainRouter.use('/projects', projectRouter);
mainRouter.use('/*', invalidRouter);
