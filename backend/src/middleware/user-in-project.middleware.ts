import { NextFunction, Request, Response } from 'express';

import { prisma } from '@/config/prisma';

//Only works if projectId is in params, body or query (that order)
//or milestoneId in params
//and must be used after auth middleware
export const userInProjectMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const projectId = await getProjectIdFromReq(req);
    if (!projectId) {
      return res.status(422).json({ message: 'Project id cannot be empty' });
    }
    const userProject = await prisma.userProject.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });
    if (!userProject) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getProjectIdFromReq = async (req: Request) => {
  if (!req.params.milestoneId) {
    return findProjectIdFromReq(req);
  }
  const milestone = await prisma.milestone.findUnique({
    where: { id: req.params.milestoneId },
    select: { projectId: true },
  });
  return milestone ? milestone.projectId : undefined;
};

const findProjectIdFromReq = (req: Request): string | undefined => {
  return req.params.projectId
    ? req.params.projectId
    : req.body.projectId
      ? req.body.projectId
      : req.query.projectId;
};
