import mongoose, { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';
import { IBaseRepository } from './base-repository.interface';
import { Schema } from 'mongoose';
export class BaseMongoDbRepository<Entity> implements IBaseRepository<Entity> {
  constructor(protected readonly schema: Schema<Entity>) {}
  createMany(item: Omit<Entity, 'id'>[]): Promise<Entity[] | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: Partial<Entity>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  exist(id: string | Partial<Entity>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async findOne(
    entityFilterQuery: FilterQuery<Entity>,
    projection?: Record<string, unknown>,
  ): Promise<Entity | null> {
    return this.schema
      .findOne(entityFilterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<Entity>): Promise<Entity[] | null> {
    return this.entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<Entity> {
    const entity = new this.entityModel(createEntityData);
    return entity.save();
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<Entity>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<Entity | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }

  async deleteMany(entityFilterQuery: FilterQuery<Entity>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.deletedCount >= 1;
  }
}
