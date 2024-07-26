/**
 * @swagger
 * components:
 *  schemas:
 *    Meeting Entity:
 *      name: Meeting Entity
 *      type: object
 *      description: Meeting Entity
 *      required:
 *        - name
 *        - link
 *        - dateTime
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name Meeting
 *        description:
 *          type: string
 *          example: description Meeting
 *        link:
 *          type: string
 *          example: https://meet.google.com
 *        dateTime:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 *        calendarId:
 *          type: string
 *          example: id del calendario
 *        projectId:
 *          type: string
 *          example: id del proyecto
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
