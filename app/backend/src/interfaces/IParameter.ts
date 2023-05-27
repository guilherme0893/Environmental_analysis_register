interface IParameter {
  id?: number;
  parameter: string;
  unity: string;
  limit: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export default IParameter;
