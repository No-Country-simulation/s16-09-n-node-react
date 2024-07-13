// src/controllers/authController.ts
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '@/prisma/prisma';

const createToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // 1 hora

    const userResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      role: user.role,
      technologies: user.technologies,
      tools: user.tools,
      location: user.location,
      timezone: user.timezone,
      createdAt: user.createdAt,
    };

    res.status(201).json({ userResponse });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // 1 hora

    const userResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      role: user.role,
      technologies: user.technologies,
      tools: user.tools,
      location: user.location,
      timezone: user.timezone,
      createdAt: user.createdAt,
    };

    res.status(200).json({ userResponse });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({ message: 'Logout successful' });
};
