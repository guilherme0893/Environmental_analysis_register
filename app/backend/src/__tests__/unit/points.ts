import { create, getOne, getAll, getByName, deleteSample } from '../../../sampleFunctions';
import { prismaMock } from '../../../singleton';
import { points, point } from '../../utils/mocks/samplePoints/samplePointsMock';

test('should create new sample ', async () => {

  prismaMock.points.create.mockResolvedValue(point);

  const { name, xCoordinate, yCoordinate } = point; 

  await expect(create({ name, xCoordinate, yCoordinate })).resolves.toEqual(point);
});

test('should find one sample ', async () => {

  prismaMock.points.findUnique.mockResolvedValue(point);

  await expect(getOne(1)).resolves.toEqual(point);

});

test('should find one sample by the name ', async () => {

  prismaMock.points.findMany.mockResolvedValue(points);

  await expect(getByName('ponto 1')).resolves.toEqual([point]);

});

test('should find all samples ', async () => {

  prismaMock.points.findMany.mockResolvedValue(points);

  await expect(getAll()).resolves.toEqual(points);

});

test('should delete one sample', async () => {

  prismaMock.points.delete.mockResolvedValue(point);

  expect(deleteSample(1)).resolves;

});