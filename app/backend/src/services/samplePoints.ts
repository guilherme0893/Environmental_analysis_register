import SampleModel from '../models/samplePoints';
import ISample from '../interfaces/ISample';

class SampleService {
  public sampleModel = new SampleModel();

  public getAll = async (): Promise<ISample[]> => {
    const samples = await this.sampleModel.getAll();
    return samples;
  };

  public getByName = async (name: string): Promise<ISample[]> => {
    const sample = await this.sampleModel.getByName(name);
    return sample as ISample[];
  };

  public create = async (
    name: string,
    xCoordinate: number,
    yCoordinate: number,
  ): Promise<ISample | undefined> => {
    const sample = await this.sampleModel.create(name, xCoordinate, yCoordinate);
    return sample;
  };

  public deleteSample = async (name: string) => {
    try {
      return await this.sampleModel.deleteSample(name);
    } catch (error) {
      console.error(error);
    }
  };
}

export default SampleService;
