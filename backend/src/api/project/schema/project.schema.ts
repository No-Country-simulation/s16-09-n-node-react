import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1).optional(),
  companyId: z.string().min(1, 'CompanyId is required'),
  calendarId: z.string().min(1).optional(),
  isActive: z.boolean().optional()
});

export type ProjectInput = z.infer<typeof projectSchema>;
