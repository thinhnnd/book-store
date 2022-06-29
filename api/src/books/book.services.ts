import MockUtil from '../utils/mock.util';
import { Book } from './models/book.model';
import { inject, injectable } from 'inversify';
import TYPES from '../common/type.const';
import { MongoDBClient } from '../utils/mongodb/client';

@injectable()
export class BookService {
  private mongoClient: MongoDBClient;
  constructor(@inject(TYPES.MongoDBClient) mongoClient: MongoDBClient) {
    this.mongoClient = mongoClient;
  }

  async getAllBooks(): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
      this.mongoClient.find('books', {}, (error, data: Book[]) => {
        if (error) reject(error);

        resolve(data);
      });
    });
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
