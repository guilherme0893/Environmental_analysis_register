import { PrismaClient } from '@prisma/client';

abstract class BaseService<T> {
  protected prisma: PrismaClient;

  protected model: string;

  constructor(prisma: PrismaClient, model: string) {
    this.prisma = prisma;
    this.model = model;
  }

  abstract create(data: Omit<T, 'id'>): Promise<T>;

  abstract update(id: number, data: Partial<T>): Promise<T>;

  abstract delete(id: number): Promise<T>;

  abstract getById(id: number): Promise<T | null>;

  abstract getAll(): Promise<T[]>;
}

export default BaseService;
