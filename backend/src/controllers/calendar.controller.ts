import { Request, Response } from 'express';

import { prisma } from '@/config/prisma';

export const createCalendar = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const result = await prisma.calendar.create({
      data: {
        name,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const getCalendar = async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;
  try {
    const calendars = await prisma.calendar.findUnique({
      where: { id: calendarId },
    });
    res.send(calendars);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const listCalendars = async (req: Request, res: Response) => {
  try {
    const calendars = await prisma.calendar.findMany();
    res.send(calendars);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};
