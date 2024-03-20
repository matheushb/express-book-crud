import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import Book from './entity/book.schema';
export class BookService {
  constructor() {}

  async create(createBookDto: CreateBookDto) {
    const createProps = {
      author: createBookDto.author,
      ISBN: createBookDto.ISBN,
      pageNumber: createBookDto.pageNumber,
      title: createBookDto.title,
    } as CreateBookDto;

    const book = new Book(createProps);
    return await book.save();
  }

  async findAll() {
    return Book.find();
  }

  async findOne(id: string) {
    return Book.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const updateProps = {
      author: updateBookDto.author ?? undefined,
      ISBN: updateBookDto.ISBN ?? undefined,
      pageNumber: updateBookDto.pageNumber ?? undefined,
      title: updateBookDto.title ?? undefined,
    } as UpdateBookDto;

    return Book.findByIdAndUpdate(id, updateProps);
  }

  async delete(id: string) {
    return Book.findByIdAndDelete(id);
  }
}
