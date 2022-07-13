interface ISampleParameters {
  id: number;
  samplePointName?: string;
  parameter: string;
  parameterUnity: string;
  parameterValue: number;
  samplingDate: Date | string;
}

export default ISampleParameters;
