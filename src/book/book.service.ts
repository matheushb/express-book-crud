import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

export class BookService {
  constructor() {}

  async create(createBookDto: CreateBookDto) {}

  async findAll() {
    console.log('CHEGOU NO SERVICE!!');
    return [];
  }

  async findOne(id: string) {}

  async update(id: string, updateBookDto: UpdateBookDto) {}

  async delete(id: string) {}
}
