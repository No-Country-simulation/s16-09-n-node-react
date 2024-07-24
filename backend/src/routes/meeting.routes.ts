import { Router } from 'express';

import {
  createMeeting,
  deleteMeeting,
  getMeeting,
  listMeeting,
  updateMeeting,
} from '@/controllers/meeting.controller';

export const meetingRouter = Router();

meetingRouter.post('/:calendarId', createMeeting);
meetingRouter.get('/:meetingId', getMeeting);
meetingRouter.get('/meetingList/:calendarId', listMeeting);
meetingRouter.put('/update/:meetingId', updateMeeting);
meetingRouter.delete('/delete/:meetingId', deleteMeeting);
