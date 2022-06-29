import mongoose, { ConnectOptions } from 'mongoose';
import debug from 'debug';
import * as dotenv from 'dotenv';

dotenv.config();
const log: debug.IDebugger = debug('app:mongoose-service');

class MongooseService {
  private count = 0;
  private mongooseOptions: ConnectOptions = {};

  constructor() {}

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    log('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect(process.env.DB_CONN_STRING, this.mongooseOptions)
      .then(() => {
        log('MongoDb is connected');
      })
      .catch((err) => {
        const retrySeconds = 5;
        log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err,
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}

export default new MongooseService();
//https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-3
