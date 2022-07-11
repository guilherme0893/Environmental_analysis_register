interface ICompleteData {
  id?: number;
  name: string;
  parameter: string;
  parameterUnity: string;
  parameterValue: number;
  xCoordinate: number;
  yCoordinate: number;
  samplingDate: Date | string;
}

export default ICompleteData;
