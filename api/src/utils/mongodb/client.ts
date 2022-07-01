import { Db, Document, InsertOneResult, ObjectId, ObjectID } from 'mongodb';
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
    limit: number,
    skip: number,
    result: (error, data) => void,
  ): void {
    let query = this.db.collection(collection).find(filter);

    if (limit != null) {
      query.limit(limit);
      !skip ? (skip = 0) : skip;

      query.skip(skip);
    }

    // return query.toArray() as Book[];
    this.db.collection(collection).find(filter);

    query.toArray((error, find) => {
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

  public count(collection: string): Promise<number> {
    return this.db.collection(collection).countDocuments();
  }

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

  public insertOne<T>(
    collection: string,
    model: T,
    result: (error, data) => void,
  ): void {
    this.db
      .collection(collection)
      .insertOne(model, (error, insert: InsertOneResult) => {
        return result(error, insert);
      });
  }

  public update<T>(
    collection: string,
    objectId: string,
    model: T,
    result: (error, data) => void,
  ): void {
    console.log('model', model);
    this.db
      .collection(collection)
      .updateOne(
        { _id: new ObjectId(objectId) },
        { $set: model },
        (error, update) => result(error, update),
      );
  }

  public updateWithOperators<T>(
    collection: string,
    objectId: string,
    operators: any,
    result: (error, data) => void,
  ): void {
    console.log('model', operators);
    this.db
      .collection(collection)
      .updateOne({ _id: new ObjectId(objectId) }, operators, (error, update) =>
        result(error, update),
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
