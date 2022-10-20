const { Router } = require('express')
const { getAllPoke, getPoke } = require ('../controllers/poke.controller.jsx')

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Poke:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: El nombre del pokemon
 *              descripcion:
 *                  type: string
 *                  description: Corta descripcion del pokemon
 *              imagen:
 *                  type: string
 *                  description: El nombre del archivo de la imagen del pokemon
 *              tipo:
 *                  type: string
 *                  description: El tipo del pokemon
 *              evolucion: 
 *                  type: string
 *                  description: Nombre de la evolucio0n del pokemon
 *              altura:
 *                  type: string
 *                  description: La altura del pokemon en metros
 *              peso:
 *                  type: string
 *                  description: El peso del pokemon en Kg
 *          required:
 *              - nombre
 *              - descripcion
 *              - imagen
 *              - tipo
 *              - evolucion
 *              - altura
 *              - peso
 *          example: 
 *              nombre: Pikachu
 *              descripcion: Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas
 *              imagen: '025'
 *              tipo: Eléctrico
 *              evolucion: Raichu
 *              altura: 0,4 m
 *              peso: 6,0 kg
 * 
 */


/**
 * @swagger
 * /pokes:
 *  get:
 *      summary: Listado de todos los pokemones
 *      tags: [Poke]
 *      responses:
 *          200:
 *              description: Carga la lista con todos los pokemones
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Poke'
 */



router.get('/pokes', getAllPoke)

/**
 * @swagger
 * /pokes/{id}:
 *  get:
 *      summary: Detalles de un pokemon
 *      tags: [Poke]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: El id del pokemon
 *      responses:
 *          200:
 *              description: Carga los detalles del un pokemon
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Poke'
 *          404:
 *              description: Pokemon no encontrado
 */

router.get('/pokes/:id',getPoke)

module.exports = router;