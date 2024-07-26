/**
 *  @swagger
 * paths:
 *  /roles:
 *    put:
 *      tags:
 *        - Role Routes
 *      summary: update Role By Id.
 *      description: update Role By Id.
 *      operationId: updateProjectByValue
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: update Role body.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/role'
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
