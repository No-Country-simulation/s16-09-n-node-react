import { Request, Response } from 'express';

import { prisma } from '@/config/prisma';

export const createMeeting = async (req: Request, res: Response) => {
  const { name, description, link, dateTime, projectId } = req.body;
  const calendarId: any = req.params.calendarId;
  try {
    const result = await prisma.meeting.create({
      data: {
        name,
        description,
        link,
        dateTime,
        calendarId,
        projectId,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const getMeeting = async (req: Request, res: Response) => {
  const meetingId = req.params.meetingId;
  try {
    const result = await prisma.meeting.findUnique({
      where: {
        id: meetingId,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const listMeeting = async (req: Request, res: Response) => {
  let calendarId = req.params.calendarId;
  try {
    const result = await prisma.meeting.findMany({
      where: {
        calendarId,
      },
    });
    if (result) {
      res.send(result);
    } else {
      res.send(JSON.stringify({ message: 'No upcoming meetings found.' }));
    }
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const updateMeeting = async (req: Request, res: Response) => {
  const { name, description, link, dateTime } = req.body;
  const meetingId = req.params.meetingId;
  try {
    const result = await prisma.meeting.update({
      where: {
        id: meetingId,
      },
      data: {
        name,
        description,
        link,
        dateTime,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const deleteMeeting = async (req: Request, res: Response) => {
  const meetingId = req.params.meetingId;
  try {
    const result = await prisma.meeting.delete({
      where: {
        id: meetingId,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};
