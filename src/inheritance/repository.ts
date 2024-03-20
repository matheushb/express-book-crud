export interface Repository<E> {
  create(entity: E): Promise<E>;
  findAll(): Promise<E[]>;
  findOne(id: string): Promise<E>;
  delete(id: string): void;
  update(id: string, entity: E): Promise<E>;
}
