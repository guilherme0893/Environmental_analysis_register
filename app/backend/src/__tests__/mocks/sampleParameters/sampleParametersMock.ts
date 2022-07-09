import ISampleParameter from '../../../interfaces/ISampleParameter';

export const sampleParameterMock: ISampleParameter = {
  id: 1,
  samplePointName: 'ponto 1',
  parameter: 'cromo',
  parameterUnity: 'mg/l',
  parameterValue: 0.05,
  samplingDate: '2022/07/09' as unknown as Date,
};

export const sampleParametersMock: ISampleParameter[] = [{
  id: 1,
  samplePointName: 'ponto 1',
  parameter: 'cromo total',
  parameterUnity: 'mg/l',
  parameterValue: 0.05,
  samplingDate: '2022/07/09' as unknown as Date,
},
{
  id: 2,
  samplePointName: 'ponto 2',
  parameter: 'cádmio total',
  parameterUnity: 'mg/l',
  parameterValue: 0.5,
  samplingDate: '2022/07/10' as unknown as Date,
}];
