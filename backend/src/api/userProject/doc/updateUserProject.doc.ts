/**
 *  @swagger
 * paths:
 *  /userProjects:
 *    put:
 *      tags:
 *        - User Project Routes
 *      summary: update User Project By Id.
 *      description: update User Project By Id.
 *      operationId: updateUserProject
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: update Project body.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/UserProject'
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
