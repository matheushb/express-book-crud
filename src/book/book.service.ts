import HttpException from '../common/error/types/http.exception';
import bookRepository from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ReturnBook } from './types/return-book.interface';

class BookService {
  constructor() {}

  async create(createBookDto: CreateBookDto) {
    const createProps = {
      author: createBookDto.author,
      ISBN: createBookDto.ISBN,
      pageNumber: createBookDto.pageNumber,
      title: createBookDto.title,
    } as CreateBookDto;

    if (
      !createProps.author ||
      !createProps.ISBN ||
      !createProps.pageNumber ||
      !createProps.title
    ) {
      throw new HttpException(400, 'Bad Request.');
    }

    return await bookRepository.create(createProps);
  }

  async findAll() {
    return bookRepository.findAll();
  }

  async findOne(id: string) {
    const book = await bookRepository.findOne(id);
    if (!book)
      throw new HttpException(404, `Resource not found with id: ${id}`);
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const updateProps = {
      author: updateBookDto.author ?? undefined,
      ISBN: updateBookDto.ISBN ?? undefined,
      pageNumber: updateBookDto.pageNumber ?? undefined,
      title: updateBookDto.title ?? undefined,
    } as UpdateBookDto;

    if (
      !updateProps.author &&
      !updateProps.ISBN &&
      !updateProps.pageNumber &&
      !updateProps.title
    ) {
      throw new HttpException(400, 'Bad Request.');
    }

    await bookRepository.update(id, updateProps);

    return await this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.findOne(id);
    await bookRepository.delete(id);
  }
}

export default new BookService();
