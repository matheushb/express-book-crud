import { Router } from 'express';
import bookController from './book/book.controller';

const router = Router();

router.get('', (req, res) => res.send('Hello!'));

router.route('/books').get(bookController.findAll).post(bookController.create);

router
  .route('/books/:id')
  .get(bookController.findOne)
  .patch(bookController.update)
  .delete(bookController.delete);

export default router;
