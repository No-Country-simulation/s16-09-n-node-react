import { Router } from 'express';

import {
  createEvent,
  deleteEvent,
  getEvent,
  listEvents,
  updateEvent,
} from '@/controllers/event.controller';

export const eventRouter = Router();

eventRouter.post('/:calendarId', createEvent);
eventRouter.get('/:eventId', getEvent);
eventRouter.get('/eventList/:calendarId', listEvents);
eventRouter.put('/update/:eventId', updateEvent);
eventRouter.delete('/delete/:eventId', deleteEvent);
