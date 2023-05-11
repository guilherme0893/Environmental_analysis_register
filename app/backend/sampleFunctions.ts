/* eslint-disable import/no-import-module-exports */
import prisma from './client';
import ISample from './src/interfaces/IPoint';

export async function create(data: ISample) {
  const { name, xCoordinate, yCoordinate } = data;
  return prisma.points.create({
    data: {
      name,
      xCoordinate,
      yCoordinate,
    },
  });
}

export async function getOne(id: number) {
  return prisma.points.findUnique({
    where: {
      id,
    },
  });
}

export async function getByName(name: string) {
  const samples = await prisma.points.findMany({
    where: {
      name,
    },
  });
  const sample = samples.filter((s) => s.name === name);
  return sample;
}

export async function getAll() {
  return prisma.points.findMany();
}

export async function deleteSample(id: number) {
  return prisma.points.delete({
    where: {
      id,
    },
  });
}

module.exports = {
  create,
  getOne,
  getAll,
  getByName,
  deleteSample,
};
