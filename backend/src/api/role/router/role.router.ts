import { Router } from 'express';

import { requireApiKey } from '@/middleware/apiKey.middleware';

import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from '../controller/role.controller';

export const roleRouter = Router();

roleRouter.post('/', requireApiKey, createRole);
roleRouter.get('/', requireApiKey, /*requireAuth,*/ getRoles);
roleRouter.put('/', requireApiKey, /*requireAuth,*/ updateRole);
roleRouter.delete('/', requireApiKey, /*requireAuth,*/ deleteRole);
