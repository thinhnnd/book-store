interface Writer<T> {
    create(item: Omit<T, 'id'>): Promise<T>
    createMany(item: Omit<T, 'id'>[]): Promise<T[]>
    update(id: string, item: Partial<T>): Promise<boolean>
    delete(id: string): Promise<boolean>
  }
  interface Reader<T> {
    find(item: Partial<T>): Promise<T[]>
    findOne(id: string | Partial<T>): Promise<T>
    exist(id: string | Partial<T>): Promise<boolean>
  }

  export type BaseRepository<T> = Writer<T> & Reader<T>