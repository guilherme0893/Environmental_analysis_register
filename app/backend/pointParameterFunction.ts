/* eslint-disable import/no-import-module-exports */
import prisma from './client';
import IPointParameter from './src/interfaces/IPointParameter';

export async function create(data: IPointParameter) {
  const { pointId, parameterId, value } = data;
  return prisma.pointParameters.create({
    data: {
      pointId,
      parameterId,
      value,
    },
  });
}

export async function getAll() {
  return prisma.pointParameters.findMany();
}

export async function getById(id: number) {
  return prisma.pointParameters.findUnique({
    where: {
      id,
    },
  });
}

export async function getByParameter(parameterId: number) {
  const pointParameters = await prisma.pointParameters.findMany();
  const filteredPointParameters = pointParameters.filter((p) => p.parameterId === parameterId);
  return filteredPointParameters;
}

module.exports = {
  create,
  getById,
  getAll,
  getByParameter,
};
