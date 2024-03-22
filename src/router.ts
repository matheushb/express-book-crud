import { Router } from 'express';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { BookRepository } from './book/book.repository';
import { HealthCheckController } from './health-check/health-check.controller';

const bookController = new BookController(
  new BookService(new BookRepository())
);

const healthCheckController = new HealthCheckController();

const router = Router();

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
router.get('/health-check', (req, res) =>
  healthCheckController.healthCheck(req, res)
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
router.get('/books', (req, res) => bookController.findAll(req, res));

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
router.post('/books', (req, res) => bookController.create(req, res));

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
router.get('/books/:id', (req, res) => bookController.findOne(req, res));

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
router.patch('/books/:id', (req, res) => bookController.update(req, res));

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
router.delete('/books/:id', (req, res) => bookController.delete(req, res));

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Título do livro
 *         author:
 *           type: string
 *           description: Autor do livro
 *         ISBN:
 *           type: string
 *           description: ISBN do livro
 *         pageNumber:
 *           type: integer
 *           description: Número de páginas do livro
 *     ReturnBook:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Título do livro
 *         author:
 *           type: string
 *           description: Autor do livro
 *         ISBN:
 *           type: string
 *           description: ISBN do livro
 *         pageNumber:
 *           type: integer
 *           description: Número de páginas do livro
 *         createdAt:
 *           type: string
 *           description: Data de criação do livro
 *         updatedAt:
 *           type: string
 *           description: Data de atualização do livro
 *         __v:
 *           type: integer
 *           description: Versão do documento
 *
 */
