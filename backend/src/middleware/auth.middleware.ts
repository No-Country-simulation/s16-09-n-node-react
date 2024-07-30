// src/middlewares/auth.middleware.ts
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = { ...(decodedToken as JwtPayload) };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
