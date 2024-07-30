import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string().min(1, 'Task name is required'),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']).optional(),
  userId: z.string().optional(),
  projectId: z.string().min(1, 'Project ID is required'),
  milestoneId: z.string().optional(),
});

export type TaskInput = z.infer<typeof taskSchema>;
