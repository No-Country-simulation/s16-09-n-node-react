/**
 * @swagger
 * components:
 *  schemas:
 *    Company To User Entity:
 *      name: Company To User Entity
 *      type: object
 *      description: Company To User entity
 *      required:
 *        - companyId
 *        - userId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        companyId:
 *          type: string
 *          example: Id of the company
 *        userId:
 *          type: string
 *          example: id of the user
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 */
