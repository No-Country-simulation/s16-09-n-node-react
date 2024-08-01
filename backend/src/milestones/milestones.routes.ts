import { Router } from 'express';

import { requireAuth } from '@/middleware/auth.middleware';
import { userInProjectMiddleware } from '@/middleware/user-in-project.middleware';

import {
  createNewMilestone,
  getMilestone,
  getProjectMilestones,
  updateMilestone,
} from './milestones.controller';

const milestonesRouter = Router();

milestonesRouter.get(
  '/:milestoneId',
  [requireAuth, userInProjectMiddleware],
  getMilestone,
);
milestonesRouter.get('/', [requireAuth], getProjectMilestones);
milestonesRouter.post(
  '/',
  [requireAuth, userInProjectMiddleware],
  createNewMilestone,
);
milestonesRouter.patch(
  '/:milestoneId',
  [requireAuth, userInProjectMiddleware],
  updateMilestone,
);

export default milestonesRouter;
