/**
 * @swagger
 * components:
 *  body:
 *    user:
 *      name: User body
 *      description: The login entity
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: coreo@coreo.com
 *        password:
 *          type: string
 *          example: 1234
 *    ratingEdit:
 *      name: rating Edit
 *      description: The edit rating
 *      type: object
 *      properties:
 *        rating:
 *          type: Number,
 *          format: int32
 *          example: 3
 *    userEdit:
 *      name: User Edit
 *      description: The edit user
 *      type: object
 *      properties:
 *        role:
 *          type: string
 *          example: user | Admin
 *        name:
 *          type: string
 *          example: test
 *    carEdit:
 *      name: Car Edit
 *      description: The edit car
 *      type: object
 *      properties:
 *        color:
 *          type: string
 *          example: blue
 *        seats:
 *          type: number
 *          example: 4
 *    travelEdit:
 *      name: Travel Edit
 *      description: The edit travel
 *      type: object
 *      properties:
 *        tripDistance:
 *          type: number
 *          format: float
 *          example: 5000.00
 *        numberSeatsAvailable:
 *          type: integer
 *          format: int32
 *          example: 4
 *        numberSeatsOccupied:
 *          type: integer
 *          format: int32
 *          example: 0
 *    project:
 *      name: Project body
 *      description: teh Project Entity
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          example: api
 *        technologies:
 *          type: string
 *          example: node
 *        ownerId:
 *          type: string
 *          example: 1234567895522
*/
