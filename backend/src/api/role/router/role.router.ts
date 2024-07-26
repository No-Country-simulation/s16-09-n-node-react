import { Router } from 'express';

import { requireApiKey } from '@/middleware/apiKey.middleware';

import {
  createRole,
  deleteRoleByValue,
  getRoleByValue,
  updateRoleByValue,
} from '../controller/role.controller';

export const roleRouter = Router();

roleRouter.post('/', requireApiKey, createRole);
roleRouter.get('/', requireApiKey, /*requireAuth,*/ getRoleByValue);
roleRouter.put('/', requireApiKey, /*requireAuth,*/ updateRoleByValue);
roleRouter.delete('/', requireApiKey, /*requireAuth,*/ deleteRoleByValue);
