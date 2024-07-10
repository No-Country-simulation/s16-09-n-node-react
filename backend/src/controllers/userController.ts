import { Request, Response } from 'express';
import { z } from 'zod';

import { prisma } from '@/prisma/prisma';

import { UserInput, userSchema } from '../schemas/userSchema';

export const createUser = async (req: Request, res: Response) => {
  try {
    const validatedData: UserInput = userSchema.parse(req.body);

    const { name, lastName, email, password } = validatedData;

    const result = await prisma.user.create({
      data: {
        email,
        password,
        name,
        lastName,
      },
    });

    res.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
