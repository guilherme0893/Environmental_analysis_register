import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ISample from '../interfaces/ISample';

class SamplePointModel {
  public getAll = async (): Promise<ISample[]> => {
    const query = 'SELECT * FROM ArcadisChallenge.samplePoints;';
    const [samplePoints] = await connection.execute(query);
    return samplePoints as ISample[];
  };

  // public getOne = async (id: number): Promise<ISample[]> => {
  //   const query = `SELECT * FROM ArcadisChallenge.samplePoints WHERE id = ?`;
  //   const [samplePoint] = await connection.execute(query, [id]);
  //   return samplePoint as ISample[];
  // };

  public create = async (
    name: string,
    xCoordinate: number,
    yCoordinate: number,
  ): Promise<ISample> => {
    const query = `INSERT INTO ArcadisChallenge.samplePoints
      (name, x_coordinate, y_coordinate) VALUES (?,?,?)`;
    const [sample] = await connection.execute<ResultSetHeader>(
      query,
      [name, xCoordinate, yCoordinate],
    );
    return {
      id: sample.insertId,
      name,
      xCoordinate,
      yCoordinate,
    };
  };
}

export default SamplePointModel;
