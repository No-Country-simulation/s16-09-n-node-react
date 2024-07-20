import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1).optional(),
  technologies: z.string().min(1),
  ownerId: z.string().min(1, 'OwnerId is required'),
  type: z.string().min(1).optional(),
  duration: z.string().min(1).optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
