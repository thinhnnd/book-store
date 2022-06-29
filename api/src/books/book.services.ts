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

  async getBookById(id: string): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      this.mongoClient.findOneById('books', id, (error, data: Book) => {
        if (error) reject(error);
        resolve(data);
      });
    });
  }

  async createBook(book: Book): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      this.mongoClient.insert('books', book, (error, idResult: string) => {
        if (error) reject(error);

        const bookCreated = this.getBookById(idResult);
        resolve(bookCreated);
      });
    });
  }

  async updateBookById(id: string, book: Book): Promise<Book> {
    return MockUtil.BOOKLIST_DATA[2];
  }

  async deleteABook(id: string): Promise<boolean> {
    if (!id) return false;
    return true;
  }
}
