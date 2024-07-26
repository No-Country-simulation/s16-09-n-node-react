import { validateKeysInPrismaModel } from './model.validation';
import { projectSchema } from '@/api/project/schema/project.schema';
import { roleSchema } from '@/api/role/schema/role.schema';


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
export const isQueryParamsValidate = (queryParams: any, method: string, model:string): any => {
  let validatedParams;
  if (method === 'get') {
    validatedParams = handleGetQueryParams(queryParams, model);
  } else if (method === 'put' || method === 'delete') {
    validatedParams = handlePutOrDeleteQueryParams(queryParams, model);
  }
  return validatedParams;
};

//============================
// Handle get query params
//============================
const handleGetQueryParams = (queryParams: any, model: string): any => {
  if (Object.keys(queryParams).length === 0) {
    return '';
  } else if (Object.keys(queryParams).length !== 1) {
    throw new ParamError('Query error','can only have one parameter.');
  }
  return isKeyAndValueValidate(queryParams, model);
};

//======================================
// Handle put or delete query params
//======================================
const handlePutOrDeleteQueryParams = (queryParams: any, model:string): any => {
  if (Object.keys(queryParams).length === 0) {
    throw new ParamError('Query error','must have parameter');
  }
  if (
    Object.keys(queryParams).length === 1 &&
    queryParams.hasOwnProperty('id')
  ) {
    return isKeyAndValueValidate(queryParams, model);
  } else {
    throw new ParamError('Query error','The query parameter only supports id.');
  }
};

//======================================
// Validate key and value
//======================================
const isKeyAndValueValidate = (queryParams: any, model: string) => {
  const [key, value] = Object.entries(queryParams)[0];
  if (!key || !value)
    throw new ParamError('Query error','The wrong query parameter.');
  const query = validateKeysInPrismaModel(model, { [key]: value });
  return query;
};

//========================
// Validate body params
//========================
export const isBodyParamsValidate = (body: any, model: string) => {
  if (Object.keys(body).length < 1)
    throw new ParamError('Body error','must have body');
  /* validador de campos en el modelo */
  const validateFields = validateKeysInPrismaModel(model, body);
  const validateBody = parseBody(validateFields, model);
  return validateBody;
};

//==============================
// response content validator
//==============================
const parseBody = (validate: any, model: string) => {
  let parsedBody;
  if (model === 'Project') {
    parsedBody = projectSchema.parse(validate);
  }
  if (model === 'Role') {
    parsedBody = roleSchema.parse(validate);
  }
  return parsedBody;
}

//==============================
// response content validator
//==============================
export const responseContentValidator = (response :any) => {
  if (response.length < 1)
    throw new ParamError('Content error', 'Search value not found');
  return response;
}
