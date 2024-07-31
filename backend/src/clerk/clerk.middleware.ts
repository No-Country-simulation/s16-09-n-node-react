import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { NextFunction, Request, Response } from 'express';

const CustomClerkRequireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await ClerkExpressRequireAuth({})(req, res, next);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default CustomClerkRequireAuth;
