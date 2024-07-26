// ./schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  username: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().min(1, 'LastName is required'),
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/, {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, and one number.',
    }),
  location: z.string().optional(),
  timezone: z.string().optional(),
  isAdmin: z.boolean().optional(),
  companyId: z.string(),
});

export type UserInput = z.infer<typeof userSchema>;
