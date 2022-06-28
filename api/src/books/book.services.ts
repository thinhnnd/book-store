import MockUtil from '../utils/mock.util';
import { Book } from '../models/book.model';
export class BookService {
  constructor() {}

  async getAllBooks(): Promise<Book[]> {
    return MockUtil.BOOKLIST_DATA;
  }

  async getBookByIds(id: string): Promise<Book> {
    return MockUtil.BOOKLIST_DATA[0];
  }

  async createBook(Book): Promise<Book> {
    return MockUtil.BOOKLIST_DATA[1];
  }

  async updateBookById(id: string, book: Book): Promise<Book> {
    return MockUtil.BOOKLIST_DATA[2];
  }
}
