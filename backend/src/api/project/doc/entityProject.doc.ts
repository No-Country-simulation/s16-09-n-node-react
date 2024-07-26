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
 *        - description
 *        - shiftId
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
 *        shiftId:
 *          type: string
 *          example: id del turno
 *        milestones:
 *          type: Milestones
 *          example: []
 *        tasks:
 *          type: Task
 *          example: []
 *        documents:
 *          type: Document
 *          example: []
 *        UserProjects:
 *          type: User Projects
 *          example: []
 *        CompanyToProjects:
 *          type: CompanyToProjects
 *          example: []
 *        Meeting:
 *          type: Meeting
 *          example: []
 *        ProjectToUserProject:
 *          type: ProjectToUserProject
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
