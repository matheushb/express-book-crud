import { Request, Response } from 'express';
import { BookService } from './book.service';

export class BookController {
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async create(req: Request, res: Response) {
    const book = await this.bookService.create(req.body);
    res.status(201).json(book);
  }

  async findAll(req: Request, res: Response) {
    const books = await this.bookService.findAll();
    res.status(200).json(books);
  }

  async findOne(req: Request, res: Response) {
    const book = await this.bookService.findOne(req.params.id);
    res.status(200).json(book);
  }

  async update(req: Request, res: Response) {
    const updatedBook = this.bookService.update(req.params.id, req.body);
    res.status(200).json(updatedBook);
  }

  async delete(req: Request, res: Response) {
    await this.bookService.delete(req.params.id);
    res.status(204);
  }
}
