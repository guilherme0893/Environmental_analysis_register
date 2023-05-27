import { create, getById, getAll, getByParameter } from '../../../pointParameterFunction';
import { prismaMock } from '../../../singleton';
import {
  pointParametersMock,
  pointsParametersMock,
} from '../../utils/mocks/pointParameters/pointParametersMock';

test('should create a new row for point and parameter ', async () => {
  prismaMock.pointParameters.create.mockResolvedValue(pointParametersMock);

  const { id, pointId, parameterId, value } = pointParametersMock;

  await expect(create({ pointId, parameterId, value, id })).resolves.toEqual(pointParametersMock);
});

test('should find one point parameter information by the point id ', async () => {
  prismaMock.pointParameters.findUnique.mockResolvedValue(pointParametersMock);

  await expect(getById(1)).resolves.toEqual(pointParametersMock);
});

test('should find all sample parameter data', async () => {
  prismaMock.pointParameters.findMany.mockResolvedValue(pointsParametersMock);

  await expect(getAll()).resolves.toEqual(pointsParametersMock);
});

test('should get a sample parameter by the parameter id', async () => {
  prismaMock.pointParameters.findMany.mockResolvedValue(pointsParametersMock);

  await expect(getByParameter(1)).resolves.toEqual([pointParametersMock]);
  await expect(getByParameter(1)).resolves.toHaveLength(1);
  await expect(getByParameter(2)).resolves.toHaveLength(2);
});
