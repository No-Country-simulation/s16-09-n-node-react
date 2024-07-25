// ./controllers/user.controller.ts
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { z } from 'zod';

import { prisma } from '@/config/prisma';

import { UserInput, userSchema } from '../schemas/userSchema';

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
        createdAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        lastName: true,
        isAdmin: true,
        location: true,
        timezone: true,
        createdAt: true,
        UserSkills: {
          select: {
            skill: {
              select: {
                name: true,
                level: true,
              },
            },
          },
        },
        UserProjects: {
          select: {
            project: {
              select: {
                name: true,
                description: true,
              },
            },
            role: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Actualizar un usuario por ID
export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validatedData: UserInput = userSchema.parse(req.body);
  const {
    name,
    lastName,
    email,
    password,
    username,
    location,
    timezone,
    isAdmin,
  } = validatedData;

  try {
    // Hash de la contraseña si se proporciona
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name,
        lastName,
        email,
        username,
        location,
        timezone,
        isAdmin,
        ...(hashedPassword && { password: hashedPassword }), // Solo actualiza la contraseña si se proporciona
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        lastName: true,
        isAdmin: true,
        location: true,
        timezone: true,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

// Eliminar un usuario por ID
export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
      },
    });

    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
