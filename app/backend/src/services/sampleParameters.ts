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
    return parameter as ISampleParameters[];
  };

  public create = async (
    samplePointName: string,
    parameter: string,
    parameterUnity: string,
    parameterValue: number,
    samplingDate: Date,
  ): Promise<ISampleParameters> => {
    try {
      const newParameter = await this.sampleParameterModel.create(
        samplePointName,
        parameter,
        parameterUnity,
        parameterValue,
        samplingDate,
      );
      return newParameter;
    } catch (error) {
      throw new Error('This sample has not been registed yet! Register it first before continuing');
    }
  };

  public deleteParameter = async (parameter: string) => {
    try {
      return await this.sampleParameterModel.deleteParameter(parameter);
    } catch (error) {
      console.error(error);
    }
  };
}

export default SampleParameterService;
