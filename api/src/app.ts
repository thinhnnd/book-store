import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { InversifyExpressServer } from 'inversify-express-utils';
import helmet from 'helmet';
import * as cors from 'cors';
import { BookService } from './books/book.services';
import TYPES from './common/type.const';
import './books/book.controller';
import './auth/auth.controller';
import { MongoDBClient } from './utils/mongodb/client';
import { AuthService } from './auth/auth.service';
import { JwtService } from './auth/jwt.service';

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
    this.container.bind<JwtService>(TYPES.JwtService).to(JwtService);
    this.container.bind<AuthService>(TYPES.AuthService).to(AuthService);
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
      const corsOptions = {
        origin: '*',
      };
      app.use(cors(corsOptions));
    });

    this.app = server.build();

    this.listen();
  }
}

export default App;
