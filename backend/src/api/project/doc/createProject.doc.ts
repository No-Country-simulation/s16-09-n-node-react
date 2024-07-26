/**
 *  @swagger
 * paths:
 *  /projects:
 *    post:
 *      tags:
 *        - Project Routes
 *      summary: Create Project.
 *      description: Create Project.
 *      operationId: CreateProject
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
