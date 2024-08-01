import { Router } from 'express';

import { requireApiKey } from '@/middleware/apiKey.middleware';

import { createUserProject, deleteUserProject, getUserProject, updateUserProject } from '../controller/userProject.controller';

export const userProjectRouter = Router();

userProjectRouter.post('/', requireApiKey, createUserProject);
userProjectRouter.get('/', requireApiKey, /*requireAuth,*/ getUserProject);
userProjectRouter.put('/', requireApiKey, /*requireAuth,*/ updateUserProject);
userProjectRouter.delete('/', requireApiKey, /*requireAuth,*/ deleteUserProject);
