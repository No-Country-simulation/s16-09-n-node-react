import { Router } from 'express';

import {
  createCalendar,
  getCalendar,
  listCalendars,
} from '@/controllers/calendar.controller';

export const calendarRouter = Router();

calendarRouter.post('/', createCalendar);
calendarRouter.get('/:calendarId', getCalendar);
calendarRouter.get('/calendarList', listCalendars);
