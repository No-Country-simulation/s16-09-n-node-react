// src/controllers/auth.controller.ts
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { prisma } from '@/config/prisma';
import { comparePasswords, hashPassword } from '@/utils/hashUtils';
import { createToken } from '@/utils/token';

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Obtener datos del cuerpo de la solicitud
    const {
      username,
      name,
      lastName,
      email,
      password,
      isAdmin,
      location,
      timezone,
    } = req.body;

    // Validar datos requeridos
    if (!username || !name || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Hash de la contraseña
    const hashedPassword = await hashPassword(password);

    // Crear usuario en la base de datos
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        name,
        lastName,
        isAdmin: isAdmin || false,
        location: location || null,
        timezone: timezone || null,
      },
    });

    // Crear un token para el usuario
    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // 1 hora

    // Formatear respuesta del usuario
    const userResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
      timezone: user.timezone,
      createdAt: user.createdAt,
    };

    // Enviar respuesta
    res.status(201).json({ user: userResponse });
  } catch (error) {
    console.error('Error registering user:', error);
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

    const isPasswordValid = await comparePasswords(password, user.password);

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
