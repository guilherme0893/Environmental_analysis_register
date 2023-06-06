import * as zod from 'zod';

interface IPointParameter {
  id: number;
  pointId: number;
  parameterId: number;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IPointParameter;

const PointParameterSchema = zod.object({
  pointId: zod.number(),
  parameterId: zod.number(),
  value: zod.number(),
  createdAt: zod.date().optional(),
  updatedAt: zod.date().optional(),
});

export { PointParameterSchema };

export type PointParameter = zod.infer<typeof PointParameterSchema>;
