import { Router } from 'express';



import { requireApiKey } from '@/middleware/apiKey.middleware';



import { createProject, deleteProjectByValue, getProjectByValue, updateProjectByValue } from '../controller/project.controller';


export const projectRouter = Router();

projectRouter.post('/', requireApiKey, createProject);
projectRouter.get('/', requireApiKey, /*requireAuth,*/ getProjectByValue);
projectRouter.put('/', requireApiKey, /*requireAuth,*/ updateProjectByValue);
projectRouter.delete('/', requireApiKey, /*requireAuth,*/ deleteProjectByValue);
