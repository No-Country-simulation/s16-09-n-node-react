/**
 * @swagger
 * components:
 *  schemas:
 *    Event Entity:
 *      name: Event Entity
 *      type: object
 *      description: Event entity
 *      required:
 *        - name
 *        - date
 *        - calendarId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: dame
 *        date:
 *          type: string
 *          format: date-time
 *          example: 2021-01-01T00:00:00Z
 *        calendarId:
 *          type: string
 *          example: id del calendario
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
