import { Schema, model } from 'mongoose';

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

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    ISBN: String,
    pageNumber: Number,
  },
  {
    timestamps: true,
  }
);

export default model('Book', bookSchema);
