import { Router } from 'express';
import bookController from './book/book.controller';
import { HealthCheckController } from './health-check/health-check.controller';
import { asyncErrorHandler } from './common/error/async-error-handler';

const router = Router();

const healthCheckController = new HealthCheckController();

/**
 * @swagger
 * tags:
 *   name: HealthCheck
 *   description: Rota para verificar a saúde da aplicação
 */

/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Verifica a saúde da aplicação
 *     tags: [HealthCheck]
 *     responses:
 *       200:
 *         description: API está rodando
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem indicando que a API está rodando
 *               example:
 *                 message: API is running!
 */
router.get(
  '/health-check',
  asyncErrorHandler(healthCheckController.healthCheck)
);

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Rotas para operações relacionadas a livros
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retorna todos os livros
 *     tags: [Books]
 *     responses:
 *        200:
 *          description: Lista de livros retornada com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/ReturnBook'
 *
 * */
router.get('/books', asyncErrorHandler(bookController.findAll));

/**
 * @swagger
 * /books:
 *   post:
 *     tags: [Books]
 *     summary: Cria um livro novo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnBook'
 * */
router.post('/books', asyncErrorHandler(bookController.create));

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser retornado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnBook'
 * */
router.get('/books/:id', asyncErrorHandler(bookController.findOne));

/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     summary: Atualiza um livro existente pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnBook'
 * */
router.patch('/books/:id', asyncErrorHandler(bookController.update));

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Exclui um livro existente pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Livro excluído com sucesso
 */
router.delete('/books/:id', asyncErrorHandler(bookController.delete));

export default router;
