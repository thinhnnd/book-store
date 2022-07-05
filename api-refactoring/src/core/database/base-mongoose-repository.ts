import { BaseRepository } from './base-repository.interface';
export class BaseMongoDbRepository<T> implements BaseRepository<T> {

    schema: Schema<T>;

    constructor() {

    }

    create(item: Omit<T, 'id'>): Promise<T> {
        throw new Error('Method not implemented.');
    }
    createMany(item: Omit<T, 'id'>[]): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    update(id: string, item: Partial<T>): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    find(item: Partial<T>): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string | Partial<T>): Promise<T> {
        throw new Error('Method not implemented.');
    }
    exist(id: string | Partial<T>): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

}