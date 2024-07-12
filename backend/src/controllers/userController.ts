import { Request, Response } from 'express';
import { z } from 'zod';

import { prisma } from '@/config/prisma';

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

    const userResponse = {
      id: result.id,
      username: result.username,
      email: result.email,
      name: result.name,
      lastName: result.lastName,
      role: result.role,
      technologies: result.technologies,
      tools: result.tools,
      location: result.location,
      timezone: result.timezone,
      createdAt: result.createdAt,
    };

    res.json(userResponse);
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
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        lastName: true,
        role: true,
        technologies: true,
        tools: true,
        location: true,
        timezone: true,
        createdAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
