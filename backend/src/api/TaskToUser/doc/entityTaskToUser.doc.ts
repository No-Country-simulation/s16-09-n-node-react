/**
 * @swagger
 * components:
 *  schemas:
 *    Task To User Entity:
 *      name: Task To User Entity
 *      type: object
 *      description: Task To User entity
 *      required:
 *        - taskId
 *        - userId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        taskId:
 *          type: string
 *          example: id of the task
 *        userId:
 *          type: string
 *          example: id of the user
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: date-time
 *          example: 2021-01-01T00:00:00Z
 */
