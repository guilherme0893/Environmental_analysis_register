/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import IPoint from '../interfaces/IPoint';
import BaseRepository from './BaseRepository';

export default class PointRepository extends BaseRepository<IPoint> {
  create(data: IPoint): Promise<IPoint> {
    return this._prisma.points.create({ data });
  }

  update(id: number, data: Partial<IPoint>): Promise<IPoint> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<IPoint> {
    throw new Error('Method not implemented.');
  }

  getById(id: number): Promise<IPoint | null> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<IPoint[]> {
    throw new Error('Method not implemented.');
  }
  // private _prisma: PrismaClient;

  // constructor(prisma = new PrismaClient()) {
  //   this._prisma = prisma;
  // }

  // public async getAll(): Promise<IPoint[]> {
  //   return this._prisma.points.findMany();
  // }

  // public async get(id: number): Promise<IPoint | null> {
  //   return this._prisma.points.findUnique({ where: { id } });
  // }

  // public async create(point: Point): Promise<IPoint> {
  //   return this._prisma.points.create({ data: point });
  // }

  // // public async update(id: number, payload: IUserUpdateRequest): Promise<IPoint> {
  // //   return this._prisma.user.update({ where: { id }, data: payload });
  // // }

  // public async delete(id: number): Promise<IPoint> {
  //   return this._prisma.points.delete({ where: { id } });
  // }
}
