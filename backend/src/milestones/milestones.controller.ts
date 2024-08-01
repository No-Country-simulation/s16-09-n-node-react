import { Request, Response } from 'express';

import { errorProfiler } from '@/shared/apiRespond/responseProfiler';

import {
  CreateMilestone,
  createMilestoneSchema,
  milestoneIdParam,
  milestoneQueries,
  UpdateMilestone,
  updateMilestoneSchema,
} from './milestone.schema';
import {
  createMilestone,
  findProjectMilestones,
  getMilestoneData,
  updateMilestoneById,
} from './milestone.service';

export const createNewMilestone = async (req: Request, res: Response) => {
  try {
    const newData: CreateMilestone = createMilestoneSchema.parse(req.body);
    const newMilestone = await createMilestone(newData);
    return res.status(201).json(newMilestone);
  } catch (error: any) {
    console.log(error);
    errorProfiler(error, res, '');
  }
};

export const getProjectMilestones = async (req: Request, res: Response) => {
  try {
    const queries = milestoneQueries.parse(req.query);
    const milestones = await findProjectMilestones(queries);
    return res.status(200).json(milestones);
  } catch (error: any) {
    console.log(error.message);
    errorProfiler(error, res, '');
  }
};

export const updateMilestone = async (req: Request, res: Response) => {
  try {
    const milestoneId = milestoneIdParam.parse(req.params.milestoneId);
    const newData: UpdateMilestone = updateMilestoneSchema.parse(req.body);
    await updateMilestoneById(milestoneId, newData);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    errorProfiler(error, res, '');
  }
};

export const getMilestone = async (req: Request, res: Response) => {
  try {
    const milestoneId = milestoneIdParam.parse(req.params.milestoneId);
    const milestone = await getMilestoneData(milestoneId);
    return res.status(200).json(milestone);
  } catch (error) {
    console.log(error);
    errorProfiler(error, res, '');
  }
};
