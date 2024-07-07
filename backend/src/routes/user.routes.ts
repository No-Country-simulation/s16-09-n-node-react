import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
export const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
