import { Db, Document, ObjectId, ObjectID } from 'mongodb';
import { injectable } from 'inversify';
import { MongoDBConnection } from './connection';

@injectable()
export class MongoDBClient {
  public db: Db;

  constructor() {
    MongoDBConnection.getConnection((connection) => {
      this.db = connection;
    });
  }

  public find(
    collection: string,
    filter: Object,
    result: (error, data) => void,
  ): void {
    this.db
      .collection(collection)
      .find(filter)
      .toArray((error, find) => {
        return result(error, find);
      });
  }

  // public findV2<T>(collection: string, filter: Object): void {
  //   this.db
  //     .collection(collection)
  //     .find(filter)
  //     .toArray()
  //     .then((find) => {
  //       return find.map(item => new T(item)));
  //     })
  //     .catch((err) => err);
  // }

  public findOneById(
    collection: string,
    objectId: string,
    result: (error, data) => void,
  ): void {
    this.db
      .collection(collection)
      .find({ _id: new ObjectId(objectId) })
      .limit(1)
      .toArray((error, find) => {
        return result(error, find[0]);
      });
  }

  public insert<T>(
    collection: string,
    model: T,
    result: (error, data) => void,
  ): void {
    this.db.collection(collection).insertOne(model, (error, insert) => {
      return result(error, insert);
    });
  }

  public update<T>(
    collection: string,
    objectId: string,
    model: T,
    result: (error, data) => void,
  ): void {
    this.db
      .collection(collection)
      .updateOne(
        { _id: new ObjectID(objectId) },
        { $set: model },
        (error, update) => result(error, model),
      );
  }

  public remove(
    collection: string,
    objectId: string,
    result: (error, data) => void,
  ): void {
    this.db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(objectId) }, (error, remove) => {
        return result(error, remove);
      });
  }
}
