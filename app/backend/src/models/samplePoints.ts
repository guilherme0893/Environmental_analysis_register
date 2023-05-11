/* eslint-disable max-lines-per-function */
import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ISample from '../interfaces/IPoint';

class SamplePointModel {
  public getAll = async (): Promise<ISample[]> => {
    const query = 'SELECT * FROM samplePoints;';
    const [samplePoints] = await connection.execute(query);
    return samplePoints as ISample[];
  };

  public getByName = async (name: string): Promise<ISample[]> => {
    const query = 'SELECT * FROM samplePoints WHERE name = ?';
    const [samplePoint] = await connection.execute(query, [name]);
    return samplePoint as ISample[];
  };

  public create = async (
    name: string,
    xCoordinate: number,
    yCoordinate: number,
  ): Promise<ISample | undefined> => {
    const query = `INSERT INTO samplePoints
    (name, x_coordinate, y_coordinate) VALUES(?,?,?)`;
    await connection.execute<ResultSetHeader>(
      query,
      [name, xCoordinate, yCoordinate],
    );
    return {
    // id: sample.insertId,
      name,
      xCoordinate,
      yCoordinate,
    };
  };

  public deleteSample = async (name: string) => {
    try {
      await connection.execute('DELETE FROM samplePoints WHERE name = ?', [name]);
    } catch (error) {
      console.error(error);
    }
  };
}

export default SamplePointModel;
