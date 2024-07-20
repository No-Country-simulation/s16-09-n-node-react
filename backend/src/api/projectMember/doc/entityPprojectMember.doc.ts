/**
 * @swagger
 * components:
 *  schemas:
 *    Project Member Entity:
 *      name: Project Member Entity
 *      type: object
 *      description: project Member Entity
 *      required:
 *        - projectId
 *        - userId
 *        - role
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        projectId:
 *          type: string
 *          example: id Project
 *        userId:
 *          type: string
 *          example: id User
 *        role:
 *          type: string
 *          example: role in Project
 *        joined_at:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 *        isActive:
 *          type: boolean
 *          example: true
 */
