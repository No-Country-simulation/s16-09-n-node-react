import { Request, Response } from 'express';

import {
  errorProfiler,
  successProfiler,
} from '@/shared/apiRespond/responseProfiler';
import {
  isBodyParamsValidate,
  isQueryParamsValidate,
  responseContentValidator,
} from '@/shared/validations/params.validation';

import {
  deleteRoleBy,
  getRolesBy,
  saveRole,
  updateRoleBy,
} from '../services/role.services';

//===================
// Create Role
//===================
export const createRole = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const body = isBodyParamsValidate(req.body, 'Role');
    const response = await saveRole(body);
    const role = responseContentValidator(response);
    successProfiler(res, 201, 'createRole', { role });
  } catch (error) {
    errorProfiler(error, res, 'createRole');
  }
};

//==========================
// Get role by value
//==========================
export const getRoleByValue = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const query = isQueryParamsValidate(req.query, 'get', 'Role');
    const response = await getRolesBy(query);
    const roles = responseContentValidator(response);
    successProfiler(res, 200, 'getRoleByValue', { roles });
  } catch (error) {
    errorProfiler(error, res, 'getRoleByValue');
  }
};

//============================
// Update role by value
//============================
export async function updateRoleByValue(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'put', 'Role');
    const body = isBodyParamsValidate(req.body, 'Role');
    const role = await updateRoleBy(query, body);
    successProfiler(res, 202, 'updateRoleByValue', { role });
  } catch (error) {
    errorProfiler(error, res, 'updateRoleByValue');
  }
}

//=============================
// Delete role by value
//=============================
export async function deleteRoleByValue(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const query = isQueryParamsValidate(req.query, 'delete', 'Role');
    const role = await deleteRoleBy(query);
    successProfiler(res, 202, 'deleteRoleByValue', { role });
  } catch (error) {
    errorProfiler(error, res, 'deleteRoleByValue');
  }
}
