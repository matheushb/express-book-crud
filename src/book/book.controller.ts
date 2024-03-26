import { Request, Response } from 'express';
import { ReturnBook } from './types/return-book.interface';
import bookService from './book.service';
import { Controller } from '../inheritance/controller';

export class BookController implements Controller<ReturnBook> {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response<string>> {
    const createdBook = await bookService.create(req.body);
    return res.status(201).json(createdBook);
  }

  async findAll(req: Request, res: Response): Promise<Response<ReturnBook[]>> {
    const books = await bookService.findAll();
    return res.status(200).json(books);
  }

  async findOne(req: Request, res: Response): Promise<Response<ReturnBook>> {
    const book = await bookService.findOne(req.params.id);
    return res.status(200).json(book);
  }

  async update(req: Request, res: Response): Promise<Response<ReturnBook>> {
    const updatedBook = await bookService.update(req.params.id, req.body);
    return res.status(200).json(updatedBook);
  }

  async delete(req: Request, res: Response): Promise<Response<void>> {
    await bookService.delete(req.params.id);
    return res.status(204);
  }
}

export default new BookController();
