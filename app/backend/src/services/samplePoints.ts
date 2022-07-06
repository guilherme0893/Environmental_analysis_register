import SampleModel from '../models/samplePoints';
import ISample from '../interfaces/ISample';

class SampleService {
  public sampleModel = new SampleModel();

  public getAll = async (): Promise<ISample[]> => {
    const samples = await this.sampleModel.getAll();
    return samples;
  };

  public create = async (name: string, xCoordinate: number, yCoordinate: number): Promise<ISample> => {
    const sample = await this.sampleModel.create(name, xCoordinate, yCoordinate);
    return sample;
  }
}

export default SampleService;
