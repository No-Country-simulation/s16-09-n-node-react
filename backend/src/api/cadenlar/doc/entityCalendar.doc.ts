/**
 * @swagger
 * components:
 *  schemas:
 *    Calendar Entity:
 *      name: Calendar Entity
 *      type: object
 *      description: Calendar entity
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: dame
 *        events:
 *          type: Event
 *          example: []
 *        company:
 *          type: Company
 *          example: []
 *        project:
 *          type: Project
 *          example: []
 *        meetings:
 *          type: Meeting
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
