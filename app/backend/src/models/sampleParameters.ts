/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ISampleParameters from '../interfaces/ISampleParameter';
import SamplePointModel from './samplePoints';

class SampleParametersModel {
  public samplePointsModel = new SamplePointModel();

  public getAll = async (): Promise<ISampleParameters[]> => {
    const query = 'SELECT * FROM sampleParameters;';
    const [sampleParameters] = await connection.execute(query);
    return sampleParameters as ISampleParameters[];
  };

  public getByName = async (name: string): Promise<ISampleParameters[]> => {
    const query = 'SELECT * FROM sampleParameters WHERE parameter = ?';
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
    const samplePoint = await this.samplePointsModel.getByName(samplePointName);
    if (!samplePoint || samplePoint.length === 0) {
      throw new Error('This sample has not been registed yet! Register it first before continue');
    }
    const query = `INSERT INTO sampleParameters 
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

  public deleteParameter = async (name: string) => {
    try {
      const query = 'DELETE FROM sampleParameters WHERE parameter = ?';
      await connection.execute(query, [name]);
    } catch (error) {
      console.error(error);
    }
  };
}

export default SampleParametersModel;
