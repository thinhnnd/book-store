import { inject, injectable } from 'inversify';
import { User } from './users.model';
import { MongoDBClient } from '../../utils/mongodb/client';
import TYPES from '../../common/type.const';

@injectable()
export class UserService {
  constructor(
    @inject(TYPES.MongoDBClient) private mongoClient: MongoDBClient,
  ) {}

  findOne(id: string) {
    return new Promise((resolve, reject) => {
      this.mongoClient.findOneById('users', id, (error, data: User) => {
        if (error) reject(error);

        resolve(data);
      });
    });
  }

  createUser(user: User) {
    return new Promise((resolve, reject) => {
      // console.log('user', user);
      this.mongoClient.insertOne<User>('users', user, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    });
  }
}
