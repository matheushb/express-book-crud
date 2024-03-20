import { Request, Response } from 'express';
import { BookService } from './book.service';

export class BookController {
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async create(req: Request, res: Response) {
    console.log('CREATE');

    res.status(201).json();
  }

  async findAll(req: Request, res: Response) {
    this.bookService.findAll();
    console.log('findAll');

    res.status(200).json();
  }

  async findOne(req: Request, res: Response) {
    console.log('findOne');
    res.status(200).json();
  }

  async update(req: Request, res: Response) {
    console.log('update');
    res.status(200).json();
  }

  async delete(req: Request, res: Response) {
    console.log('delete');
    res.status(204);
  }
}
