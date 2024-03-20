import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

class BookService {
  constructor() {}

  async create(createBookDto: CreateBookDto) {}

  async findAll() {}

  async findOne(id: string) {}

  async update(id: string, updateBookDto: UpdateBookDto) {}

  async delete(id: string) {}
}
