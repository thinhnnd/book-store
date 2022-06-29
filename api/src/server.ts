import 'reflect-metadata';
import App from './app';
import BookController from './books/book.controller';

const app = new App(5000);

app.start();
