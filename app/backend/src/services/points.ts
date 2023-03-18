import { PrismaClient } from '@prisma/client';
import ISample from '../interfaces/ISample';

class PointsService {
  private prisma = new PrismaClient();

  private main = async () => {
    await this.prisma.$disconnect().catch(async (error) => {
      console.log(error);
      await this.prisma.$disconnect();
      process.exit(1);
    });
  };

  public create = async (
    name: string,
    xCoordinate: number,
    yCoordinate: number,
  ): Promise<ISample | undefined> => {
    const sample = await this.prisma.points.create({
      data: {
        name,
        xCoordinate,
        yCoordinate,
      },
    });
    return sample;
  };
}

export default PointsService;

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
