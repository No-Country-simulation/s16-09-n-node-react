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
  data: object,
) => {
  console.log('Code -> ', statusCode);
  console.log('Name -> ', functionName);
  console.log('Data -> ', data);
  handleApiResponse(res, statusCode, functionName, data);
}

//====================
// Error Profiler
//====================
export const errorProfiler = (
  error: any,
  res: Response,
  functionName: string,
) => {
  let statusCode = 500;
  let errorMessage = 'An unexpected error occurred';
  let errorKey = 'Server error ';
  if (error instanceof ZodError) {
    statusCode = 422;
    errorKey = 'Validation error';
    errorMessage = error.errors
      .map((e) => `${e.path}: ${e.message} `)
      .join(',');
  } else if (error instanceof PrismaClientKnownRequestError) {
    statusCode = 400;
    errorKey = 'Prisma error';
    errorMessage = error.message.substring(error.message.indexOf('(\n') + 2);
  } else if (error instanceof Error) {
    statusCode = 404;
    errorKey = 'Client error';
    errorMessage = error.message;
  }
  handleApiResponse(res, statusCode, functionName, {
    [errorKey]: errorMessage,
  });
};

//=======================
// Handle api response
//=======================
const handleApiResponse = (
  res: Response,
  statusCode: number,
  functionName: string,
  content: object,
) => apiResponse(res, statusCode, functionName, content);
