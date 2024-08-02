import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { NextFunction, Request, Response, Router } from 'express';

import { registerUserFromClerk } from './clerk.controller';
import CustomClerkRequireAuth from './clerk.middleware';

const clerkRoutes = Router();

clerkRoutes.get('/auth', CustomClerkRequireAuth, registerUserFromClerk);

export default clerkRoutes;
