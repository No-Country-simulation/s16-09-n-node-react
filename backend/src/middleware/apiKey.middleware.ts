import { NextFunction, Request, Response } from 'express';

import {
  HostDev,
  HostProdBack,
  HostProdFront,
  Key,
  PORT,
} from '@/config/env/env.config';
import { errorProfiler } from '@/shared/apiRespond/responseProfiler';

//=====================
// Class Param Error
//=====================
export class ApiKeyError extends Error {
  constructor(
    public key: string,
    public message: string,
  ) {
    super(`${key}: ${message}`);
  }
}

//======================
// Host Authorization
//======================
const authorizedHosts = [
  `${HostProdFront}`,
  `${HostProdBack}`,
  `${HostDev}:${PORT}`,
];

//===================
// Require Api Key
//===================
export const requireApiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const apiKey = req.headers.apikey;
    if (!apiKey || Key !== apiKey) {
      throw new ApiKeyError('Key error', 'The api key is not valid.');
    }
    const host = req.headers.host;
    if (!host || !authorizedHosts.includes(host)) {
      throw new ApiKeyError(
        'Host error',
        'The address of the request is not authorized',
      );
    }
    next();
  } catch (error) {
    errorProfiler(error, res, 'createProject');
  }
};
