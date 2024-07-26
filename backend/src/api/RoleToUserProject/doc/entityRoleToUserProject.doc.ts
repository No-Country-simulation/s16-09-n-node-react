/**
 * @swagger
 * components:
 *  schemas:
 *    Role To User Project:
 *      name: Role To User Project
 *      type: object
 *      description: Role To User Project
 *      required:
 *        - roleId
 *        - userProjectId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        roleId:
 *          type: string
 *          example: id of the role
 *        userProjectId:
 *          type: string
 *          example: Id of the user project
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 */
