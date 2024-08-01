/**
 *  @swagger
 * paths:
 *  /userProjects:
 *    delete:
 *      tags:
 *        - User Project Routes
 *      summary: Delete User Project.
 *      description: Delete User Project.
 *      operationId: DeleteUserProject
 *      parameters:
 *        - $ref: '#/components/parameters/id'
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
