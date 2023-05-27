interface IPointParameter {
  id: number;
  pointId: number;
  parameterId: number;
  value: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default IPointParameter;
