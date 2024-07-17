import { Router } from 'express';

import {
  createCalendar,
  createEvent,
  deleteEvent,
  getCalendar,
  listCalendars,
  listEvents,
  updateEvent,
} from '@/services/calendar/v3';

export const calendarRouter = Router();

/* CalendarList */
calendarRouter.get('/calendarList', listCalendars);

/* Calendars */
calendarRouter.get('/calendars/:calendarId?', getCalendar);
calendarRouter.post('/calendars', createCalendar);

/* Events */
calendarRouter.get('/events/:calendarId?', listEvents);
calendarRouter.post('/events/:calendarId/event', createEvent);
calendarRouter.put('/events/:calendarId?/event/:eventId', updateEvent);
calendarRouter.delete('/events/:calendarId?/event/:eventId', deleteEvent);
