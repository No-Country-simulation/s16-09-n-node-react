/**
 *  @swagger
 * paths:
 *  /projects:
 *    put:
 *      tags:
 *        - Project Routes
 *      summary: update Project By Id.
 *      description: update Project By Id.
 *      operationId: updateProject
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: update Project body.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/project'
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
