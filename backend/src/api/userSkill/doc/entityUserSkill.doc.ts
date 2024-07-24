/**
 * @swagger
 * components:
 *  schemas:
 *    User Skill Entity:
 *      name: User Skill Entity
 *      type: object
 *      description: User Skill entity
 *      required:
 *        - email
 *        - password
 *        - name
 *        - lastName
 *        - isAdmin
 *        - companyId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        username:
 *          type: string
 *          example: userName
 *        email:
 *          type: string
 *          example: coreo@coreo.com
 *        password:
 *          type: string
 *          example: pass
 *        name:
 *          type: string
 *          example: dame
 *        lastName:
 *          type: string
 *          example: lastName
 *        isAdmin:
 *          type: boolean
 *          example: true
 *        location:
 *          type: string
 *          example: location
 *        timezone:
 *          type: string
 *          example: location
 *        companyId:
 *          type: string
 *          example: id de la empresa
 *        userProjects:
 *          type: User Projects
 *          example: []
 *        userSkills:
 *          type: User Skills
 *          example: []
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
