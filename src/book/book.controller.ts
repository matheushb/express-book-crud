import { Request, Response } from 'express';
import { ReturnBook } from './interfaces/return-book.interface';
import bookService from './book.service';

export class BookController {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response<string>> {
    await bookService.create(req.body);
    return res.status(201).json('book successfully created');
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
