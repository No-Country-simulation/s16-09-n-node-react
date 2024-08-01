/**
 *  @swagger
 * paths:
 *  /milestone:
 *    post:
 *      tags:
 *        - Milestone Routes
 *      summary: Create Milestone.
 *      description: Create Milestone.
 *      operationId: CreateMilestone
 *      requestBody:
 *        description: create Milestone body.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/milestone_create'
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
 *    get:
 *      tags:
 *        - Milestone Routes
 *      summary: Get Milestones in project.
 *      description: Get Milestones in project.
 *      operationId: GetMilestones
 *      parameters:
 *        - name: projectId
 *          in: query
 *          description: Project identificator
 *          required: true
 *          schema:
 *              type: string
 *        - name: status
 *          in: query
 *          description: Milestone status
 *          schema:
 *           type: string
 *           enum:
 *             - OPEN
 *             - UPCOMING
 *             - CLOSED
 *             - EXPIRED
 *             - COMPLETED
 *           description: 'Status of the milestone'
 *        - name: name
 *          in: query
 *          description: Search term... not all the name
 *          required: false
 *          schema:
 *              type: string
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
 *  /milestone/{milestoneId}:
 *    patch:
 *      tags:
 *        - Milestone Routes
 *      summary: Update Milestone.
 *      description: Update Milestone.
 *      operationId: UpdateMilestone
 *      parameters:
 *        - milestoneId:
 *          in: path
 *          description: Milestone Identifier
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        description: update Milestone body.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/milestone_update'
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
 *    get:
 *      tags:
 *        - Milestone Routes
 *      summary: Get Milestone.
 *      description: Get Milestone.
 *      operationId: GetMilestone
 *      parameters:
 *        - name: milestoneId
 *          in: path
 *          description: Milestone Identifier
 *          required: true
 *          schema:
 *            type: string
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
