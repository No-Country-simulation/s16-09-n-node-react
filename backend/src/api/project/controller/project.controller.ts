import { Request, Response } from 'express';

import { errorProfiler, successProfiler } from '@/shared/apiRespond/responseProfiler';
import { isBodyParamsValidate, isQueryParamsValidate, responseContentValidator } from '@/shared/validations/params.validation';

import { getProjectsBy, saveProject, updateProjectBy } from '../services/project.services';

//===================
// Create project
//===================
export const createProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const body = isBodyParamsValidate(req.body, 'Project');
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
export const getProjects = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const query = isQueryParamsValidate(req.query, 'get', 'Project');
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
export async function updateProject(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'put', 'Project');
    const body = isBodyParamsValidate(req.body, 'Project');
    const project = await updateProjectBy(query, body);
    successProfiler(res, 202, 'updateProjectByValue', { project });
  } catch (error) {
    errorProfiler(error, res, 'updateProjectByValue');
  };
};

//=============================
// Delete project by value
//=============================
export async function deleteProject(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'delete', 'Project');
    const project = await updateProjectBy(query, {isActive: false});
    successProfiler(res, 202, 'deleteProjectByValue', { project });
  } catch (error) {
    errorProfiler(error, res, 'deleteProjectByValue');
  };
};
