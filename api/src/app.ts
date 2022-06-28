import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { Book } from 'models/book.model';
import { Category } from 'common/category.enum';
import { booksData } from 'mocks/book.mock';
import { users } from 'mocks/user.mock';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send('ExpressJS has worked successfuly!');
});

app.get('/books', (_req: Request, res: Response) => {
  res.send(booksData);
});

app.get('/users', (_req: Request, res: Response) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
