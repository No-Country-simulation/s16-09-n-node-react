/**
 * @swagger
 * components:
 *  schemas:
 *    Skill Entity:
 *      name: Skill Entity
 *      type: object
 *      description: Skill entity
 *      required:
 *        - name
 *        - level
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: Name
 *        level:
 *          type: string
 *          example: expert
 *        UserSkills:
 *          type: UserSkill
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 */
