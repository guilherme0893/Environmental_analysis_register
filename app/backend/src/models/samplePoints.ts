import connection from './connection';
import ISample from '../interfaces/ISample';

class SamplePointModel {
  public getAll = async (): Promise<ISample[]> => {
    const query = `SELECT * FROM samplePoints;`
    const [samplePoints] = await connection.execute(query);
    return samplePoints as ISample[];
  }
}

export default SamplePointModel;
