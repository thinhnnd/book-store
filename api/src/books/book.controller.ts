import * as express from 'express';
import { Request, Response, Router } from 'express';
import { BookService } from './book.services';
import { Book } from '../models/book.model';
import { controller, httpGet, httpPost } from 'inversify-express-utils';

@controller('/books')
class BookController {
  public router: Router;
  private bookService: BookService;

  constructor() {
    this.router = express.Router();
    this.bookService = new BookService();
    this.initializeRoutes();
  }

  public initializeRoutes() {}

  @httpGet('/')
  async getBooks(request: express.Request, response: express.Response) {
    console.log('routing worked');
    const books = await this.bookService.getAllBooks();
    console.log(books);
    response.send(books);
  }

  @httpPost('/')
  async createBook(request: Request, response: Response) {
    const bookReq: Book = request.body;
    const book = await this.bookService.createBook(bookReq);
    response.send(book);
  }

  async updateBook(request: Request, response: Response) {
    let bookId = '';

    if (bookId == null || undefined)
      response.status(404).send(`Invalid book id`);

    const bookReq: Book = request.body;
    const book = await this.bookService.updateBookById(bookId, bookReq);
    response.send(book);
  }
}

export default BookController;
