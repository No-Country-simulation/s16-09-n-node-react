/**
 * @swagger
 * components:
 *  schemas:
 *    Company To Document:
 *      name: Company To Document
 *      type: object
 *      description: Company To Document
 *      required:
 *        - companyId
 *        - documentId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        companyId:
 *          type: string
 *          example: Id of the company
 *        documentId:
 *          type: string
 *          example: id of the document
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: dateTime
 *          example: 2021-01-01 00:00:00
 */
