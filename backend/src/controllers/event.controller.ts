import { Request, Response } from 'express';

import { prisma } from '@/config/prisma';

export const createEvent = async (req: Request, res: Response) => {
  const { name, date } = req.body;
  const calendarId = req.params.calendarId;
  try {
    const result = await prisma.event.create({
      data: {
        calendarId,
        name,
        date,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const getEvent = async (req: Request, res: Response) => {
  const eventId = req.params.eventId;
  try {
    const result = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const listEvents = async (req: Request, res: Response) => {
  let calendarId = req.params.calendarId;
  try {
    const result = await prisma.event.findMany({
      where: {
        calendarId,
      },
    });
    if (result) {
      res.send(result);
    } else {
      res.send(JSON.stringify({ message: 'No upcoming events found.' }));
    }
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { name, date } = req.body;
  const eventId = req.params.eventId;
  try {
    const result = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        name,
        date,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const eventId = req.params.eventId;
  try {
    const result = await prisma.event.delete({
      where: {
        id: eventId,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};
