interface Writer<Entity> {
  create(item: Omit<Entity, 'id'>): Promise<Entity | null>;
  createMany(item: Omit<Entity, 'id'>[]): Promise<Entity[] | null>;
  update(id: string, item: Partial<Entity>): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
interface Reader<Entity> {
  find(item: Partial<Entity>): Promise<Entity[] | null>;
  findOne(id: string | Partial<Entity>): Promise<Entity | null>;
  exist(id: string | Partial<Entity>): Promise<boolean>;
}

export type IBaseRepository<Entity> = Writer<Entity> & Reader<Entity>;
