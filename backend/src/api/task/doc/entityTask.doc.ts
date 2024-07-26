/**
 * @swagger
 * components:
 *  schemas:
 *    Task Entity:
 *      name: Task Entity
 *      type: object
 *      description: Task entity
 *      required:
 *        - name
 *        - status
 *        - projectId
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
 *        dueDate:
 *          type: string
 *          format: date-time
 *          example: 2021-01-01T00:00:00Z
 *        status:
 *          type: enum
 *          enum: ["TODO","IN_PROGRESS","REVIEW","DONE"]
 *          example: TODO
 *        userId:
 *          type: string
 *          example: id del usuario
 *        projectId:
 *          type: string
 *          example: id del proyecto
 *        milestoneId:
 *          type: string
 *          example: id del milestone
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: date-time
 *          example: 2021-01-01T00:00:00Z
 */
