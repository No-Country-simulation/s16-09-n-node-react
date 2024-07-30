import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { Router } from 'express';

import { registerUserFromClerk } from './clerk.controller';

const clerkRoutes = Router();

clerkRoutes.get('/auth', ClerkExpressRequireAuth(), registerUserFromClerk);

export default clerkRoutes;
