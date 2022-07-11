/* eslint-disable max-params */
import SampleParametersModel from '../models/sampleParameters';
import ISampleParameters from '../interfaces/ISampleParameter';

class SampleParameterService {
  public sampleParameterModel = new SampleParametersModel();

  public getAll = async (): Promise<ISampleParameters[]> => {
    const parameters = await this.sampleParameterModel.getAll();
    return parameters;
  };

  public getByName = async (sampleParameter: string): Promise<ISampleParameters[]> => {
    const parameter = await this.sampleParameterModel.getByName(sampleParameter);
    if (parameter.length === 0 || !parameter) {
      throw new Error('Parameter not found! Please check the spell or register the parameter');
    }
    return parameter as ISampleParameters[];
  };

  public create = async (
    samplePointName: string,
    parameter: string,
    parameterUnity: string,
    parameterValue: number,
    samplingDate: Date,
  ): Promise<ISampleParameters> => {
    const newParameter = await this.sampleParameterModel.create(
      samplePointName,
      parameter,
      parameterUnity,
      parameterValue,
      samplingDate,
    );
    return newParameter;
  };
}

export default SampleParameterService;
