import { Request, Response } from 'express';

import { errorProfiler, successProfiler } from '@/shared/apiRespond/responseProfiler';
import { isBodyParamsValidate, isQueryParamsValidate, responseContentValidator } from '@/shared/validations/params.validation';

import { getUserProjectsBy, saveUserProject, updateUserProjectBy } from '../services/userProject.services';

//=======================
// Create user project
//=======================
export const createUserProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const body = isBodyParamsValidate(req.body, 'UserProject');
    const response = await saveUserProject(body);
    const userProject = responseContentValidator(response);
    successProfiler(res, 201, 'createUserProject', { userProject });
  } catch (error) {
    errorProfiler(error, res, 'createUserProject');
  };
};

//=============================
// Get user project by value
//=============================
export const getUserProject = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const query = isQueryParamsValidate(req.query, 'get', 'UserProject');
    const response = await getUserProjectsBy(query);
    const userProjects = responseContentValidator(response);
    successProfiler(res, 200, 'getUserProjectByValue', { userProjects });
  } catch (error) {
    errorProfiler(error, res, 'getUserProjectByValue');
  };
};

//================================
// Update user project by value
//================================
export async function updateUserProject(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'put', 'UserProject');
    const body = isBodyParamsValidate(req.body, 'UserProject');
    const userProject = await updateUserProjectBy(query, body);
    successProfiler(res, 202, 'updateUserProjectByValue', { userProject });
  } catch (error) {
    errorProfiler(error, res, 'updateUserProjectByValue');
  };
};

//================================
// Delete user project by value
//================================
export async function deleteUserProject(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'delete', 'UserProject');
    const userProject = await updateUserProjectBy(query, { isActive: false });
    successProfiler(res, 202, 'deleteUserProjectByValue', { userProject });
  } catch (error) {
    errorProfiler(error, res, 'deleteUserProjectByValue');
  };
};
