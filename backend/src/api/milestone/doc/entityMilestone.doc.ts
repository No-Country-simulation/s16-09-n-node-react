/**
 * @swagger
 * components:
 *  schemas:
 *    Milestone Entity:
 *      name: Milestone Entity
 *      type: object
 *      description: Milestone entity
 *      required:
 *        - name
 *        - completed
 *        - projectId
 *        - targetDate
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name
 *        description:
 *          type: string
 *          example: description
 *        targetDate:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 *        completed:
 *          type: boolean
 *          example: false
 *        projectId:
 *          type: string
 *          example: id del proyecto
 *        tasks:
 *          type: Task
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
