import { Router } from 'express';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

const bookService = new BookService();
const bookController = new BookController(bookService);

const router = Router();

router.get('', (req, res) => res.send('Hello!'));
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
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API para operações relacionadas a livros
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retorna todos os livros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Books]
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
 *               $ref: '#/components/schemas/Book'
 */

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
 *               $ref: '#/components/schemas/Book'
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
 *               $ref: '#/components/schemas/Book'
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
router
  .route('/books')
  .get((req, res) => bookController.findAll(req, res))
  .post((req, res) => bookController.create(req, res));

router
  .route('/books/:id')
  .get((req, res) => bookController.findOne(req, res))
  .patch((req, res) => bookController.update(req, res))
  .delete((req, res) => bookController.delete(req, res));

export default router;
