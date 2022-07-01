import * as express from 'express';
import { Request, Response, Router } from 'express';
import { BookService } from './book.services';
import { Book } from './models/book.model';
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../common/type.const';

@controller('/books')
class BookController {
  public router: Router;
  private bookService: BookService;

  constructor(@inject(TYPES.BookService) bookService: BookService) {
    this.router = express.Router();
    this.initializeRoutes();
    this.bookService = bookService;
  }

  public initializeRoutes() {}

  @httpGet('/')
  async getBooks(request: express.Request, response: express.Response) {
    const { limit, pageNum } = request.query;
    let _limit = parseInt(limit?.toString()) || null;
    let _pageNum = parseInt(pageNum?.toString()) || null;
    const books = await this.bookService.getBooks(_pageNum, _limit);
    response.send(books);
  }

  @httpGet('/:id')
  async getABook(request: express.Request, response: express.Response) {
    const books = await this.bookService.getBookById(request.params.id);
    response.send(books);
  }

  @httpPost('/')
  async createABook(request: Request, response: Response) {
    const bookReq: Book = request.body;
    const book = await this.bookService.createBook(bookReq);
    response.send(book);
  }

  @httpPut('/:id')
  async updateABook(request: Request, response: Response) {
    let bookId = request.params.id;

    if (bookId == null || undefined)
      response.status(404).send(`Invalid book id`);

    const bookReq: Book = request.body;
    const book = await this.bookService.updateBookById(bookId, bookReq);
    response.send(book);
  }

  @httpDelete('/:id', TYPES.JwtAuthMiddleware)
  async deleteABook(request: Request, response: Response) {
    let bookId = request.params.id;

    if (bookId == null || undefined)
      response.status(404).send(`Invalid book id`);

    const book = await this.bookService.deleteABook(bookId);
    response.send(book);
  }
}

export default BookController;
