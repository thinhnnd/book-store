import App from './app';
import BookController from './books/book.controller';

const app = new App([new BookController()], 5000);

app.listen();
