import ICompleteData from '../../../interfaces/ICompleteData';

// export const completeDataMock: ICompleteData = {
//   name: 'ponto 2',
//   parameter: 'niquel',
//   parameterUnity: 'mg/l',
//   parameterValue: 0.01,
//   xCoordinate: 40.34,
//   yCoordinate: -50.74,
//   samplingDate: '2022-07-12' as unknown as Date,
// };

const fullCompleteDataMock: ICompleteData[] = [{
  name: 'ponto 1',
  parameter: 'cromo',
  parameterUnity: 'mg/l',
  parameterValue: 0.1,
  xCoordinate: 70.54,
  yCoordinate: -40.24,
  samplingDate: '2011-08-21' as unknown as Date,
},
{
  name: 'ponto 2',
  parameter: 'niquel',
  parameterUnity: 'mg/l',
  parameterValue: 0.01,
  xCoordinate: 40.34,
  yCoordinate: -50.74,
  samplingDate: '2022-07-12' as unknown as Date,
},
{
  name: 'ponto 1',
  parameter: 'cadmio',
  parameterUnity: 'mg/l',
  parameterValue: 0.1,
  xCoordinate: 70.54,
  yCoordinate: -40.24,
  samplingDate: '2011-08-22' as unknown as Date,
},
];

export default fullCompleteDataMock;
