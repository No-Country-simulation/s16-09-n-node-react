/**
 * @swagger
 * components:
 *  schemas:
 *    Project To User Project:
 *      name: Project To User Project
 *      type: object
 *      description: Project To User Project
 *      required:
 *        - projectId
 *        - userProjectId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        projectId:
 *          type: string
 *          example: id of the project
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
