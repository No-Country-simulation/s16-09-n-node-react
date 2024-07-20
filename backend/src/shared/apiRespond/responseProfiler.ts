import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Response } from 'express';
import { ZodError } from 'zod';

import { apiResponse } from './apiResponse';

//====================
// Success Profiler
//====================
export const successProfiler = (
  res: Response,
  statusCode: number,
  functionName: string,
  data: any,
) => {
  handleApiResponse(res, statusCode, functionName, data);
};

//====================
// Error Profiler
//====================
export const errorProfiler = (
  error: any,
  res: Response,
  functionName: string,
) => {
  const errorType = error.constructor.name;
  const { statusCode, key } = errorMapping[errorType] || {
    statusCode: 500,
    key: 'Server error',
  };
  const errorMessage = generateErrorMessage(error);
  const errorKey = error.key || key || 'Error';

  handleApiResponse(res, statusCode, functionName, {
    [errorKey]: errorMessage,
  });
};

//============================================
// Error mapping for cleaner error handling
//============================================
const errorMapping: { [key: string]: { statusCode: number; key?: string } } = {
  ApiKeyError: { statusCode: 404 },
  Error: { statusCode: 401, key: 'Client error' },
  FieldError: { statusCode: 409 },
  ParamError: { statusCode: 409 },
  PrismaClientKnownRequestError: { statusCode: 400, key: 'Prisma error' },
  RouterError: { statusCode: 409 },
  ZodError: { statusCode: 422, key: 'Validation error' },
};

//==============================================
// Generate error message based on error type
//==============================================
const generateErrorMessage = (error: any) => {
  if (error instanceof ZodError) {
    return error.errors.map((e) => `${e.path}: ${e.message}`).join(',');
  } else if (error instanceof PrismaClientKnownRequestError) {
    return error.message.substring(error.message.indexOf('(\n') + 2);
  }
  return error.message;
};

//=======================
// Handle api response
//=======================
const handleApiResponse = (
  res: Response,
  statusCode: number,
  functionName: string,
  content: object,
) => {
  apiResponse(res, statusCode, functionName, content);
};
