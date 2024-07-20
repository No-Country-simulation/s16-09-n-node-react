/**
 * @swagger
 * components:
 *  schemas:
 *    User Entity:
 *      name: User Entity
 *      type: object
 *      description: User entity
 *      required:
 *        - email
 *        - password
 *        - name
 *        - lastName
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
 *        role:
 *          type: string
 *          example: admin
 *        technologies:
 *          type: string
 *          example: tecnologías
 *        tools:
 *          type: string
 *          example: tools
 *        location:
 *          type: string
 *          example: location
 *        timezone:
 *          type: string
 *          example: location
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 *        projects:
 *          type: Projects
 *          example: []
 *        memberships:
 *          type: ProjectMember
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 */
