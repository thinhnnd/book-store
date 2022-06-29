import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { InversifyExpressServer } from 'inversify-express-utils';
import helmet from 'helmet';
import { BookService } from './books/book.services';
import TYPES from './common/type.const';
import './books/book.controller';
import { MongoDBClient } from './utils/mongodb/client';

class App {
  public app: express.Application;
  public server: InversifyExpressServer;
  public port: number;

  public container: Container;

  constructor(port) {
    this.app = express();
    this.port = port;
    this.container = new Container();
    if (process.env.NODE_ENV === 'development') {
      let logger = makeLoggerMiddleware();
      this.container.applyMiddleware(logger);
    }
    // this.initializeMiddlewares();
    // this.initializeControllers(controllers);
    // this.initializeContainer();
    this.initializeContainer();
  }

  private initializeContainer() {
    // this.container.bind();
    this.container.bind<BookService>(TYPES.BookService).to(BookService);
    this.container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
  }

  // private initializeMiddlewares() {
  //   this.app.use(bodyParser.json());
  // }

  // private initializeControllers(controllers) {
  //   controllers.forEach((controller) => {
  //     this.app.use('/', controller.router);
  //   });
  // }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  public start() {
    let server = new InversifyExpressServer(this.container);
    server.setConfig((app) => {
      app.use(bodyParser.json());
      app.use(helmet());
    });

    this.app = server.build();

    this.listen();
  }
}

export default App;
