// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.points.createMany({
//     data: [
//       {
//         name: 'ponto 1',
//         xCoordinate: 90,
//         yCoordinate: 180,
//       },
//       {
//         name: 'ponto 2',
//         xCoordinate: 80,
//         yCoordinate: 170,
//       },
//       {
//         name: 'ponto 3',
//         xCoordinate: 70,
//         yCoordinate: 160,
//       },
//       {
//         name: 'ponto 4',
//         xCoordinate: 60,
//         yCoordinate: 150,
//       },
//       {
//         name: 'ponto 5',
//         xCoordinate: 50,
//         yCoordinate: 140,
//       },
//     ],
//   });
//   await prisma.parameters.createMany({
//     data: [
//       {
//         parameter: 'cadmio',
//         unity: 'mg/l',
//         limit: 0.1,
//       },
//       {
//         parameter: 'cromo total',
//         unity: 'mg/l',
//         limit: 0.1,
//       },
//       {
//         parameter: 'arsenio total',
//         unity: 'mg/l',
//         limit: 0.001,
//       },
//     ],
//   });
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
