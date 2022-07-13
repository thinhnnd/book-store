import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { InversifyExpressServer } from 'inversify-express-utils';
import helmet from 'helmet';
import * as cors from 'cors';

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

  private initializeContainer() {}

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  // Need boolean return type
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

//Tìm hiểu về import và export
// import *
// import {}
// import
export default App;
