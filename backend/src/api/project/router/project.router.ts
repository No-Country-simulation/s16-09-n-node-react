import { Router } from 'express';

import { requireApiKey } from '@/middleware/apiKey.middleware';

import { createProject, deleteProject, getProjects, updateProject } from '../controller/project.controller';

export const projectRouter = Router();

projectRouter.post('/', requireApiKey, createProject);
projectRouter.get('/', requireApiKey, /*requireAuth,*/ getProjects);
projectRouter.put('/', requireApiKey, /*requireAuth,*/ updateProject);
projectRouter.delete('/', requireApiKey, /*requireAuth,*/ deleteProject);
