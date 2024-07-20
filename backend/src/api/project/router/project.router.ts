import { Router } from 'express';

import {
  createProject,
  deleteProjectByValue,
  getProjectByValue,
  updateProjectByValue,
} from '../controller/project.controller';

export const projectRouter = Router();

projectRouter.post('/', createProject);
projectRouter.get('/', /*requireAuth,*/ getProjectByValue);
projectRouter.put('/', /*requireAuth,*/ updateProjectByValue);
projectRouter.delete('/', /*requireAuth,*/ deleteProjectByValue);
