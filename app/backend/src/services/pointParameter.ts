import { PrismaClient } from '@prisma/client';
import IPoint from '../interfaces/IPoint';
import IService from '../interfaces/IService';
import { BadRequestError, Conflict } from '../utils/errors/index';
import IPointParameter, { PointParameter } from '../interfaces/IPointParameter';

class PointParameterService implements IService<IPointParameter> {
  private prisma = new PrismaClient();

  public create = async (pointParameter: PointParameter) => {
    const { pointId, parameterId, value } = pointParameter;

    const pointParameterExists = await this.prisma.pointParameters.findFirst({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        AND: {
          parameterId,
          pointId,
        },
      },
    });

    if (pointParameterExists) {
      throw new Conflict('Point parameter already registered.');
    }

    const newPointParameter = await this.prisma.pointParameters.create({
      data: {
        pointId,
        parameterId,
        value,
      },
    });
    return newPointParameter;
  };

  public getAll = async () => {
    const points = await this.prisma.pointParameters.findMany({
      include: {
        point: {
          // select: {
          //   createdAt: true,
          //   updatedAt: true,
          // },
        },
      },
    });
    return points;
  };

  public getOne = async (id: number) => {
    const point = await this.prisma.pointParameters.findUnique({
      where: {
        id,
      },
    });

    if (id === null || id === undefined) {
      throw new BadRequestError('Id not provided.');
    }

    if (!point || point === null) {
      throw new Error('Database error. Point not found');
    } else {
      return [point];
    }
  };

  public getByParameter = async (parameterId: number) => {
    const pointsByParameter = await this.prisma.pointParameters.findMany({
      where: {
        parameterId,
      },
    });
    return pointsByParameter;
  };

  public update = async (_id: number, _data: Partial<IPoint>) => {
    throw new Error('Method not implemented.');
  };

  public delete = async (id: number) => {
    const point = await this.prisma.pointParameters.delete({
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

export default PointParameterService;
