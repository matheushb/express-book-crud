import { Router } from 'express';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

const bookService = new BookService();
const bookController = new BookController(bookService);

const router = Router();

router.get('', (req, res) => res.send('Hello!'));

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
