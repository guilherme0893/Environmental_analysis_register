import { PrismaClient } from '@prisma/client';
import ISample from '../interfaces/ISample';

class PointsService {
  private prisma = new PrismaClient();

  // private main = async () => {
  //   await this.prisma.$disconnect().catch(async (error) => {
  //     console.log(error);
  //     await this.prisma.$disconnect();
  //     process.exit(1);
  //   });
  // };

  public create = async (data: ISample): Promise<ISample> => {
    const sample = await this.prisma.points.create({
      data,
    });
    return sample;
  };
}

export default PointsService;
