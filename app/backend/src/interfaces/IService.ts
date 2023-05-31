interface IService<T> {
  create(data: T): Promise<T>;
  getAll(): Promise<T[] | null>;
  getOne(id: string | number): Promise<T[] | null[]>;
  update?(id: string | number, data: Partial<T>): Promise<boolean>;
  delete(id: string | number): Promise<T | null>;
}

export default IService;
