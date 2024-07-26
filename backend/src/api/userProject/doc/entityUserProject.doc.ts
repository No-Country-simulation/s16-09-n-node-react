/**
 * @swagger
 * components:
 *  schemas:
 *    User Project Entity:
 *      name: User Project Entity
 *      type: object
 *      description: User Project entity
 *      required:
 *        - userId
 *        - projectId
 *        - roleId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        userId:
 *          type: string
 *          example: id del usuario
 *        projectId:
 *          type: string
 *          example: id del proyecto
 *        roleId:
 *          type: string
 *          example: id del rol
 *        ProjectToUserProject:
 *          type: ProjectToUserProject
 *          example: []
 *        RoleToUserProject:
 *          type: RoleToUserProject
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
