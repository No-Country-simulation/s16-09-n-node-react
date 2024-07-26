import { Router } from 'express';

import { controller, middleware } from '@/config/swagger/swagger.config';

export const swaggerRouter = Router();

swaggerRouter.use('/', middleware, controller);
