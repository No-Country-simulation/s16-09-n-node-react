import { ProjectInput, projectSchema } from '@/api/project/schema/project.schema';

import { isFieldInPrismaModel } from './model.validation';

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
    throw new Error('Invalid query. can only have one parameter.');
  }
  return isKeyAndValueValidate(queryParams);
};

//======================================
// Handle put or delete query params
//======================================
const handlePutOrDeleteQueryParams = (queryParams: any): any => {
  if (Object.keys(queryParams).length === 0) {
    throw new Error('Invalid query. must have parameter');
  }
  if (
    Object.keys(queryParams).length === 1 &&
    queryParams.hasOwnProperty('id')
  ) {
    return isKeyAndValueValidate(queryParams);
  } else {
    throw new Error('Invalid query. The query parameter only supports id.');
  }
};

//======================================
// Validate key and value
//======================================
const isKeyAndValueValidate = (queryParams: any) => {
  const [key, value] = Object.entries(queryParams)[0];
  if (!key || !value)
    throw new Error('Invalid query. The wrong query parameter.');
  console.log('key -> ', key);
  if (isFieldInPrismaModel('Project', key)) {
    console.log('ok');
  }
  return queryParams;
};

//========================
// Validate body params
//========================
export const isBodyParamsValidate = (body: any) => {
  if (Object.keys(body).length < 1)
    throw new Error('Invalid body. must have body');
  /* validador de campos en el modelo */
  const parsedBody: ProjectInput = projectSchema.parse(body);
  return parsedBody;
};
