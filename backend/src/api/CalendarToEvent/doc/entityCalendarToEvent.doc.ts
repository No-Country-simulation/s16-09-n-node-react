/**
 * @swagger
 * components:
 *  schemas:
 *    Calendar To Event:
 *      name: Calendar To Event
 *      type: object
 *      description: Calendar To Event
 *      required:
 *        - calendarId
 *        - eventId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        calendarId:
 *          type: string
 *          example: Id of the calendar
 *        eventId:
 *          type: string
 *          example: id of the event
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 */
