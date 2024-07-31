/**
 * @swagger
 * components:
 *  schemas:
 *    User Skill Entity:
 *      name: User Skill Entity
 *      type: object
 *      description: User Skill entity
 *      required:
 *        - userId
 *        - skillId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        level:
 *          type: string
 *          example: nivel de habilidad
 *        userId:
 *          type: string
 *          example: id del usuario
 *        skillId:
 *          type: string
 *          example: id de la habilidad
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
