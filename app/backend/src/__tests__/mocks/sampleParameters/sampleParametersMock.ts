import ISampleParameter from '../../../interfaces/ISampleParameter';

export const sampleParameterMock: ISampleParameter = {
  id: 1,
  samplePointName: 'ponto 1',
  parameter: 'cromo total',
  parameterUnity: 'mg/l',
  parameterValue: 0.05,
};

export const sampleParametersMock: ISampleParameter[] = [{
  id: 1,
  samplePointName: 'ponto 1',
  parameter: 'cromo total',
  parameterUnity: 'mg/l',
  parameterValue: 0.05,
},
{
  id: 2,
  samplePointName: 'ponto 2',
  parameter: 'cádmio total',
  parameterUnity: 'mg/l',
  parameterValue: 0.5,
}];
