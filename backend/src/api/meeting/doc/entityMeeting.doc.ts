/**
 * @swagger
 * components:
 *  schemas:
 *    Meeting Entity:
 *      name: Meeting Entity
 *      type: object
 *      description: Meeting Entity
 *      required:
 *        - projectId
 *        - title
 *        - meeting_date
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        projectId:
 *          type: string
 *          example: id Project
 *        title:
 *          type: string
 *          example: title Meeting
 *        meeting_date:
 *          type: dateTime
 *          example: data Meeting
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 *        isActive:
 *          type: boolean
 *          example: true
 */
