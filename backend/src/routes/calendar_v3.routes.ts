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

export const calendarV3Router = Router();

/* CalendarList */
calendarV3Router.get('/calendarList', listCalendars);

/* Calendars */
calendarV3Router.get('/calendars/:calendarId?', getCalendar);
calendarV3Router.post('/calendars', createCalendar);

/* Events */
calendarV3Router.get('/events/:calendarId?', listEvents);
calendarV3Router.post('/events/:calendarId/event', createEvent);
calendarV3Router.put('/events/:calendarId?/event/:eventId', updateEvent);
calendarV3Router.delete('/events/:calendarId?/event/:eventId', deleteEvent);
