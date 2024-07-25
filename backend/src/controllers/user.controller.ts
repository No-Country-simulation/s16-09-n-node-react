import type { Request, Response } from 'express';
import { z } from 'zod';

import { prisma } from '@/config/prisma';

import { userSchema, type UserInput } from '../schemas/userSchema';

// Crear un nuevo usuario
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

    res.status(201).json({
      id: result.id,
      email: result.email,
      name: result.name,
      lastName: result.lastName,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

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
        email: true,
        name: true,
        lastName: true,
        createdAt: true,
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
  const { name, lastName, email, password } = validatedData;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, lastName, email, password },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
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
