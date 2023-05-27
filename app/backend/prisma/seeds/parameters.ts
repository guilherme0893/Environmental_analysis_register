// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
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
