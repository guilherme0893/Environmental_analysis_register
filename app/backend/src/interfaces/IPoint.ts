import * as zod from 'zod';

interface IPoint {
  id?: number;
  name: string;
  xCoordinate: number;
  yCoordinate: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default IPoint;

const PointSchema = zod.object({
  id: zod.number().optional(),
  name: zod.string().min(3).max(50),
  xCoordinate: zod.number(),
  yCoordinate: zod.number(),
  createdAt: zod.date().optional(),
  updatedAt: zod.date().optional(),
});

export { PointSchema };

export type Point = zod.infer<typeof PointSchema>;
