import { PrismaClient } from '@prisma/client';
import IPoint, { Point } from '../interfaces/IPoint';
import IService from '../interfaces/IService';
import { BadRequestError, Conflict } from '../utils/errors/index';

class PointsService implements IService<IPoint> {
  private prisma = new PrismaClient();

  public create = async (data: Point) => {
    const { name, xCoordinate, yCoordinate } = data;
    const pointExists = await this.prisma.points.findMany({
      where: {
        name: data.name,
      },
    });
    if (pointExists) {
      throw new Conflict('Point already exists with this name.');
    }
    const point = await this.prisma.points.create({
      data: {
        name,
        xCoordinate,
        yCoordinate,
      },
    });
    return point;
  };

  public getAll = async () => {
    const points = await this.prisma.points.findMany();
    return points;
  };

  public getOne = async (id: number) => {
    const point = await this.prisma.points.findUnique({
      where: {
        id,
      },
    });

    console.log(id, point);

    if (id === null || id === undefined) {
      throw new BadRequestError('Id not provided.');
    }

    if (!point || point === null) {
      throw new Error('Database error. Point not found');
    } else {
      return [point];
    }
  };

  public update = async (_id: number, _data: Partial<IPoint>) => {
    throw new Error('Method not implemented.');
  };

  public delete = async (id: number) => {
    const point = await this.prisma.points.delete({
      where: {
        id,
      },
    });
    if (id === null || id === undefined) {
      throw new BadRequestError('Id not provided.');
    }
    return point;
  };
}

export default PointsService;
