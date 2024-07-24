/**
 * @swagger
 * components:
 *  schemas:
 *    Company Entity:
 *      name: Company Entity
 *      type: object
 *      description: Company entity
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name
 *        calendarId:
 *          type: string
 *          example: id del calendario
 *        users:
 *          type: User
 *          example: []
 *        documents:
 *          type: Document
 *          example: []
 *        project:
 *          type: Project
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
