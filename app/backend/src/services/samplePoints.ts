import SampleModel from '../models/samplePoints';
import ISample from '../interfaces/ISample';

class SampleService {
  public sampleModel = new SampleModel();

  public getAll = async (): Promise<ISample[]> => {
    const samples = await this.sampleModel.getAll();
    return samples;
  };
}

export default SampleService;
