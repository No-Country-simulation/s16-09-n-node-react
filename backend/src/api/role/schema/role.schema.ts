import { z } from 'zod';

export const roleSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  isActive: z.boolean().optional(),
});

export type RoleInput = z.infer<typeof roleSchema>;
