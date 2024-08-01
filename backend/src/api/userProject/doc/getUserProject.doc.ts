/**
 *  @swagger
 * paths:
 *  /userProjects:
 *    get:
 *      tags:
 *        - User Project Routes
 *      summary: search in user project.
 *      description: search in user project.
 *      operationId: getUserProjects
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *        - $ref: '#/components/parameters/userId'
 *        - $ref: '#/components/parameters/roleId'
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
