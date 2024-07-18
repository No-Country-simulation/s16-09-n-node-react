import { Request, Response } from 'express';
import { google } from 'googleapis';

const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/admin.directory.resource.calendar',
];

const auth = new google.auth.GoogleAuth({
  keyFile: '/path/to/your-secret-key.json', //JSON CREDENTIALS FILE PATH
  scopes: SCOPES,
});

const calendar: any = google.calendar({ version: 'v3', auth });

export const listCalendars = async (req: Request, res: Response) => {
  try {
    const calendars = await calendar.calendarList.list({});
    res.send(calendars.data);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const getCalendar = async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;
  try {
    const calendars = await calendar.calendars.get({
      calendarId: calendarId || 'primary',
    });
    res.send(calendars.data);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const createCalendar = async (req: Request, res: Response) => {
  const { summary, description, location, timeZone } = req.body;
  try {
    const result = await calendar.calendars.insert({
      requestBody: {
        kind: 'calendar#calendar',
        summary: summary,
        description: description,
        location: location,
        timeZone: timeZone,
      },
    });
    res.send(result.data);
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const listEvents = async (req: Request, res: Response) => {
  let calendarId = req.params.calendarId;
  try {
    const result = await calendar.events.list({
      calendarId: calendarId || 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    if (result?.data?.items?.length) {
      res.send(result.data.items);
    } else {
      res.send(JSON.stringify({ message: 'No upcoming events found.' }));
    }
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const createEvent = async (req: Request, res: Response) => {
  const { summary, location, description, start, end, attendees } = req.body;
  var event = {
    summary: summary,
    location: location,
    description: description,
    start: {
      dateTime: start.dateTime,
      timeZone: start.timeZone,
    },
    end: {
      dateTime: end.dateTime,
      timeZone: end.timeZone,
    },
    recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
    attendees: attendees,
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };

  const authClient = await auth.getClient();
  const calendarId = req.params.calendarId;
  try {
    const result = await calendar.events.insert({
      auth: authClient,
      calendarId: calendarId || 'primary',
      resource: event,
    });
    console.log('Event created: %s', result.data);
    res.json('Event successfully created!');
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { summary, location, description, start, end } = req.body;
  var event = {
    summary: summary,
    location: location,
    description: description,
    start: {
      dateTime: start.dateTime,
      timeZone: start.timeZone,
    },
    end: {
      dateTime: end.dateTime,
      timeZone: end.timeZone,
    },
  };

  const authClient = await auth.getClient();
  const calendarId = req.params.calendarId;
  const eventId = req.params.eventId;
  try {
    const result = await calendar.events.update({
      auth: authClient,
      calendarId: calendarId || 'primary',
      eventId: eventId,
      resource: event,
    });
    console.log('Event updated: %s', result.data);
    res.json('Event successfully updated!');
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const authClient = await auth.getClient();
  const calendarId = req.params.calendarId;
  const eventId = req.params.eventId;
  try {
    const result = await calendar.events.delete({
      auth: authClient,
      calendarId: calendarId || 'primary',
      eventId: eventId,
    });
    console.log('Event deleted: %s', result.data);
    res.json('Event successfully deleted!');
  } catch (err) {
    res.send(JSON.stringify({ error: err }));
  }
};
