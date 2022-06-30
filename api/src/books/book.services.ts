import MockUtil from '../utils/mock.util';
import { Book } from './models/book.model';
import { inject, injectable } from 'inversify';
import TYPES from '../common/type.const';
import { MongoDBClient } from '../utils/mongodb/client';
import { FindOptions } from 'mongodb';
import { Pagination } from './models/pagination';

@injectable()
export class BookService {
  private mongoClient: MongoDBClient;
  constructor(@inject(TYPES.MongoDBClient) mongoClient: MongoDBClient) {
    this.mongoClient = mongoClient;
  }

  // async getAllBooks(): Promise<Book[]> {
  //   return new Promise<Book[]>((resolve, reject) => {
  //     this.mongoClient.find('books', {}, (error, data: Book[]) => {
  //       if (error) reject(error);

  //       resolve(data);
  //     });
  //   });
  // }

  async getBooks(
    pageNum: number = 1,
    limit: number = 50,
  ): Promise<Pagination<Book[]>> {
    return new Promise<Pagination<Book[]>>((resolve, reject) => {
      this.mongoClient.find(
        'books',
        {},
        limit,
        pageNum,
        async (error, data: Book[]) => {
          if (error) reject(error);
          let total = await this.mongoClient.count('books');
          let result: Pagination<Book[]> = new Pagination<Book[]>();
          result.data = data;
          result.total = total;

          resolve(result);
        },
      );
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
      this.mongoClient.insertOne('books', book, (error, result) => {
        if (error) reject(error);

        const bookCreated = this.getBookById(result.insertedId);
        resolve(bookCreated);
      });
    });
  }

  async updateBookById(id: string, book: Book): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      console.log('book', book);
      this.mongoClient.update('books', id, book, (error, result) => {
        if (error) reject(error);
        console.log('result', result);
        const { acknowledged } = result;
        if (!acknowledged)
          throw new Error(`An error ocurr when update item with _id: ${id}`);
        console.log('id ', id);
        const bookCreated = this.getBookById(id);
        resolve(bookCreated);
      });
    });
  }

  async deleteABook(id: string): Promise<boolean> {
    if (!id) return false;
    return true;
  }
}
