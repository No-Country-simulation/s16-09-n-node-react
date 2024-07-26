import { Request, Response } from 'express';

import { errorProfiler, successProfiler } from '@/shared/apiRespond/responseProfiler';
import { isBodyParamsValidate, isQueryParamsValidate, responseContentValidator } from '@/shared/validations/params.validation';

import { deleteProjectsBy, getProjectsBy, saveProject, updateProjectsBy } from '../services/project.services';

//===================
// Create project
//===================
export const createProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const body = isBodyParamsValidate(req.body);
    const response = await saveProject(body);
    const project = responseContentValidator(response);
    successProfiler(res, 201, 'createProject', { project });
  } catch (error) {
    errorProfiler(error, res, 'createProject');
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
    const response = await getProjectsBy(query);
    const projects = responseContentValidator(response);
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
