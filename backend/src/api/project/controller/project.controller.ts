import { Request, Response } from 'express';

import {
  errorProfiler,
  successProfiler,
} from '@/shared/apiRespond/responseProfiler';
import {
  isBodyParamsValidate,
  isQueryParamsValidate,
} from '@/shared/validations/params.validation';

import {
  deleteProjectsBy,
  getProjectsBy,
  saveProject,
  updateProjectsBy,
} from '../services/project.services';

//===================
// Create project
//===================
export const createProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const body = isBodyParamsValidate(req.body);
    const project = await saveProject(body);
    successProfiler(res, 201, 'getProjectByValue', { project });
  } catch (error) {
    errorProfiler(error, res, 'getProjectByValue');
  };
};

//==========================
// Get project by value
//==========================
export const getProjectByValue = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const query = isQueryParamsValidate(req.query, 'get');
    const projects = await getProjectsBy(query);
    successProfiler(res, 200, 'getProjectByValue', { projects });
  } catch (error) {
    errorProfiler(error, res, 'getProjectByValue');
  };
};

//============================
// Update project by value
//============================
export async function updateProjectByValue(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'put');
    const body = isBodyParamsValidate(req.body);
    const project = await updateProjectsBy(query, body);
    successProfiler(res, 202, 'updateProjectByValue', { project });
  } catch (error) {
    errorProfiler(error, res, 'updateProjectByValue');
  };
};

//=============================
// Delete project by value
//=============================
export async function deleteProjectByValue(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'delete');
    const project = await deleteProjectsBy(query);
    successProfiler(res, 202, 'deleteProjectByValue', { project });
  } catch (error) {
    errorProfiler(error, res, 'deleteProjectByValue');
  };
};
