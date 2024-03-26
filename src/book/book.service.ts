import HttpException from '../common/error/types/http.exception';
import bookRepository from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

class BookService {
  constructor() {}

  async create(createBookDto: CreateBookDto): Promise<void> {
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

    bookRepository.create(createProps);
  }

  async findAll() {
    return bookRepository.findAll();
  }

  async findOne(id: string) {
    return await bookRepository.findOne(id);
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

  async delete(id: string) {
    return bookRepository.delete(id);
  }
}

export default new BookService();
