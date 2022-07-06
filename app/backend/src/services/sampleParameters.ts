import SampleParametersModel from '../models/sampleParameters';
import ISampleParameters from '../interfaces/ISampleParameter';

class SampleParameterService {
  public sampleParameterModel = new SampleParametersModel();

  public getAll = async (): Promise<ISampleParameters[]> => {
    const parameters = await this.sampleParameterModel.getAll();
    return parameters;
  };

  public create = async (
    samplePointName: string,
    parameter: string,
    parameterUnity: string,
    parameterValue: number,
  ): Promise<ISampleParameters> => {
    const newParameter = await this.sampleParameterModel.create(
      samplePointName,
      parameter,
      parameterUnity,
      parameterValue,
    );
    return newParameter;
  };
}

export default SampleParameterService;
