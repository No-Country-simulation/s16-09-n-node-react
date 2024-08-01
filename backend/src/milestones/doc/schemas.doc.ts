/**
 * @swagger
 * components:
 *   body:
 *     milestone_create:
 *       name: Milestone create body
 *       type: object
 *       properties:
 *         projectId:
 *           type: string
 *           format: cuid
 *           example: 'cjld2cjxh0000qzrmn831i7rn'
 *         name:
 *           type: string
 *           description: 'Name of the milestone'
 *         description:
 *           type: string
 *           maxLength: 1024
 *           description: 'Description of the milestone'
 *         startDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Start date of the milestone'
 *         targetDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Target date for completion of the milestone'
 *         status:
 *           type: string
 *           enum:
 *             - OPEN
 *             - UPCOMING
 *             - CLOSED
 *             - EXPIRED
 *           default: OPEN
 *           description: 'Status of the milestone'
 *       required:
 *         - projectId
 *         - name
 *     milestone_update:
 *       name: Milestone update body
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: 'Name of the milestone'
 *         description:
 *           type: string
 *           maxLength: 1024
 *           description: 'Description of the milestone'
 *         startDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Start date of the milestone'
 *         targetDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Target date for completion of the milestone'
 *         status:
 *           type: string
 *           enum:
 *             - OPEN
 *             - UPCOMING
 *             - CLOSED
 *             - EXPIRED
 *           default: OPEN
 *           description: 'Status of the milestone'
 *         completed:
 *           type: boolean
 *           default: false
 *           description: 'Whether the milestone is completed'
 *     milestone_xd:
 *       name: Milestone update body
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           example: 'cjld2cjxh0000qzrmn831i7rn'
 *         projectId:
 *           type: string
 *           format: cuid
 *           example: 'cjld2cjxh0000qzrmn831i7rn'
 *         name:
 *           type: string
 *           description: 'Name of the milestone'
 *         description:
 *           type: string
 *           maxLength: 1024
 *           description: 'Description of the milestone'
 *         startDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Start date of the milestone'
 *         targetDate:
 *           type: string
 *           format: date
 *           example: '2021-01-01'
 *           description: 'Target date for completion of the milestone'
 *         status:
 *           type: string
 *           enum:
 *             - OPEN
 *             - UPCOMING
 *             - CLOSED
 *             - EXPIRED
 *           default: OPEN
 *           description: 'Status of the milestone'
 *         completed:
 *           type: boolean
 *           default: false
 *           description: 'Whether the milestone is completed'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           default: 'new Date()'
 *           description: 'Creation date of the milestone'
 *       required:
 *         - id
 *         - projectId
 *         - name
 *         - status
 *         - completed
 *         - createdAt
 */
