import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import Book from './entity/book.schema';

class BookRepository {
  constructor() {}

  async create(createBookDto: CreateBookDto) {
    const book = new Book(createBookDto);
    return await book.save();
  }

  async findAll() {
    return Book.find();
  }

  async findOne(id: string) {
    return await Book.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await Book.findByIdAndUpdate(id, updateBookDto);
  }

  async delete(id: string) {
    await Book.findByIdAndDelete(id);
  }
}
export default new BookRepository();
