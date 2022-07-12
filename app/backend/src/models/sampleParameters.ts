/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ISampleParameters from '../interfaces/ISampleParameter';

class SampleParametersModel {
  public getAll = async (): Promise<ISampleParameters[]> => {
    const query = 'SELECT * FROM ArcadisChallenge.sampleParameters;';
    const [sampleParameters] = await connection.execute(query);
    return sampleParameters as ISampleParameters[];
  };

  public getByName = async (name: string): Promise<ISampleParameters[]> => {
    const query = 'SELECT * FROM ArcadisChallenge.sampleParameters WHERE parameter = ?';
    const [parameter] = await connection.execute(query, [name]);
    return parameter as unknown as ISampleParameters[];
  };

  public create = async (
    samplePointName: string,
    parameter: string,
    parameterUnity: string, // can be removed?
    parameterValue: number,
    samplingDate: Date,
  ): Promise<ISampleParameters> => {
    const query = `INSERT INTO ArcadisChallenge.sampleParameters 
      (samplePointName, parameter, parameterUnity, parameterValue, samplingDate)
        VALUES (?,?,?,?,?)`;
    const [newParameter] = await connection.execute<ResultSetHeader>(
      query,
      [samplePointName, parameter, parameterUnity, parameterValue, samplingDate],
    );
    return {
      id: newParameter.insertId,
      samplePointName,
      parameter,
      parameterUnity,
      parameterValue,
      samplingDate,
    };
  };
}

export default SampleParametersModel;
