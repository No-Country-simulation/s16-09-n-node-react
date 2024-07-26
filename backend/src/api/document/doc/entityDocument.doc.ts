/**
 * @swagger
 * components:
 *  schemas:
 *    Document Entity:
 *      name: Document Entity
 *      type: object
 *      description: Document entity
 *      required:
 *        - name
 *        - url
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name
 *        url:
 *          type: string
 *          example: url
 *        projectId:
 *          type: string
 *          example: id del proyecto
 *        companyId:
 *          type: string
 *          example: id de la empresa
 *        CompanyToDocuments:
 *          type: CompanyToDocuments
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
