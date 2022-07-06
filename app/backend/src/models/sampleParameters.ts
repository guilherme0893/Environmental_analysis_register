import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ISampleParameters from '../interfaces/ISampleParameter';

class SampleParametersModel {
  public getAll = async (): Promise<ISampleParameters[]> => {
    const query = 'SELECT * FROM ArcadisChallenge.sampleParameters;';
    const [sampleParameters] = await connection.execute(query);
    return sampleParameters as ISampleParameters[];
  };

  public create = async (
    samplePointName: string,
    parameter: string,
    parameterUnity: string,
    parameterValue: number,
  ): Promise<ISampleParameters> => {
    const query = `INSERT INTO ArcadisChallenge.sampleParameters 
      (samplePointName, parameter, parameterUnity, parameterValue) VALUES (?,?,?,?)`;
    const [newParameter] = await connection.execute<ResultSetHeader>(
      query,
      [samplePointName, parameter, parameterUnity, parameterValue],
    );
    return {
      id: newParameter.insertId,
      samplePointName,
      parameter,
      parameterUnity,
      parameterValue,
    };
  };
}

export default SampleParametersModel;
