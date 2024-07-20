/**
 * @swagger
 * components:
 *  schemas:
 *    Project Entity:
 *      name: Project Entity
 *      type: object
 *      description: Project entity
 *      required:
 *        - name
 *        - ownerId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: apiTime
 *        description:
 *          type: string
 *          example: api para controlar el tiempo
 *        ownerId:
 *          type: string
 *          example: id
 *        technologies:
 *          type: string
 *          example: tecnologías
 *        type:
 *          type: string
 *          example: api
 *        duration:
 *          type: string
 *          example: 1 month
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 *        projectMembers:
 *          type: ProjectMember
 *          example: []
 *        meeting:
 *          type: Meeting
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 */
