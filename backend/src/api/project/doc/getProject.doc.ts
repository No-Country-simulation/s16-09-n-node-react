/**
 *  @swagger
 * paths:
 *  /projects:
 *    get:
 *      tags:
 *        - Project Routes
 *      summary: search in project by value.
 *      description: search in project by value.
 *      operationId: getProjects
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *        - $ref: '#/components/parameters/name'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/apiResponse'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notServer'
 *      security:
 *        - apiKeyAuth: []
 */
