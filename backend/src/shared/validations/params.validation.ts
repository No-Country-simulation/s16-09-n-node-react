import { ProjectInput, projectSchema } from '@/api/project/schema/project.schema';

import { validateKeysInPrismaModel } from './model.validation';

//=====================
// Class Param Error
//=====================
export class ParamError extends Error {
  constructor(
    public key: string,
    public message: string,
  ) {
    super(`${key}: ${message}`);
  }
}

//========================
// Validate query params
//========================
export const isQueryParamsValidate = (queryParams: any, method: string): any => {
  let validatedParams;
  if (method === 'get') {
    validatedParams = handleGetQueryParams(queryParams);
  } else if (method === 'put' || method === 'delete') {
    validatedParams = handlePutOrDeleteQueryParams(queryParams);
  }
  return validatedParams;
};

//============================
// Handle get query params
//============================
const handleGetQueryParams = (queryParams: any): any => {
  if (Object.keys(queryParams).length === 0) {
    return '';
  } else if (Object.keys(queryParams).length !== 1) {
    throw new ParamError('Query error','can only have one parameter.');
  }
  return isKeyAndValueValidate(queryParams);
};

//======================================
// Handle put or delete query params
//======================================
const handlePutOrDeleteQueryParams = (queryParams: any): any => {
  if (Object.keys(queryParams).length === 0) {
    throw new ParamError('Query error','must have parameter');
  }
  if (
    Object.keys(queryParams).length === 1 &&
    queryParams.hasOwnProperty('id')
  ) {
    return isKeyAndValueValidate(queryParams);
  } else {
    throw new ParamError('Query error','The query parameter only supports id.');
  }
};

//======================================
// Validate key and value
//======================================
const isKeyAndValueValidate = (queryParams: any) => {
  const [key, value] = Object.entries(queryParams)[0];
  if (!key || !value)
    throw new ParamError('Query error','The wrong query parameter.');
  const query = validateKeysInPrismaModel("Project", { [key]: value });
  return query;
};

//========================
// Validate body params
//========================
export const isBodyParamsValidate = (body: any) => {
  if (Object.keys(body).length < 1)
    throw new ParamError('Body error','must have body');
  /* validador de campos en el modelo */
  const validateFields = validateKeysInPrismaModel("Project", body);
  const parsedBody: ProjectInput = projectSchema.parse(validateFields);
  return parsedBody;
};

//==============================
// response content validator
//==============================
export const responseContentValidator = (response :any) => {
  if (response.length < 1)
    throw new ParamError('Content error', 'Search value not found');
  return response;
}
