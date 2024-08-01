import { MilestoneStatus } from '@prisma/client';
import { z } from 'zod';

const milestoneNameValidation = z
  .string()
  .min(1, 'Name is required')
  .max(255, 'Name must be less than 256 characters');

export const milestoneSchema = z.object({
  id: z.string().cuid(),
  projectId: z.string().cuid(),
  name: milestoneNameValidation,
  description: z
    .string()
    .max(1024, 'Description must be less than 1024 characters')
    .optional(),
  startDate: z.date().optional(),
  targetDate: z.date().optional(),
  status: z.nativeEnum(MilestoneStatus).default('OPEN'),
  completed: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
});

export const createMilestoneSchema = milestoneSchema
  .omit({ id: true, createdAt: true })
  .refine(
    (data) => {
      if (data.startDate && data.targetDate) {
        return data.startDate <= data.targetDate;
      }
      return true;
    },
    {
      message: 'Start date must be before or equal to target date',
      path: ['startDate', 'targetDate'],
    },
  );

export const updateMilestoneSchema = milestoneSchema
  .omit({ id: true, projectId: true, createdAt: true })
  .partial()
  .refine(
    (data) => {
      if (data.startDate && data.targetDate) {
        return data.startDate <= data.targetDate;
      }
      return true;
    },
    {
      message: 'Start date must be before or equal to target date',
      path: ['startDate', 'targetDate'],
    },
  );

export const milestoneQueries = z
  .object({
    projectId: z.string().cuid(),
    status: z.nativeEnum(MilestoneStatus).optional(),
    name: milestoneNameValidation.optional(),
  })
  .strict();

export const milestoneIdParam = z.string().cuid2();

export type Milestone = z.infer<typeof milestoneSchema>;
export type CreateMilestone = z.infer<typeof createMilestoneSchema>;
export type UpdateMilestone = z.infer<typeof updateMilestoneSchema>;
