/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { Request, Response } from 'express';
// import SamplePointModel from '../models/samplePoints';
import SampleParameterService from '../services/sampleParameters';

class SampleParameterController {
  // public samplePointsModel = new SamplePointModel();

  public sampleParameterService = new SampleParameterService();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const parameters = await this.sampleParameterService.getAll();
    return res.status(200).json(parameters);
  };

  public getByName = async (req: Request, res: Response): Promise<Response> => {
    const { searchedParameter } = req.params;
    const parameter = await this.sampleParameterService.getByName(searchedParameter);
    if (parameter.length === 0 || !parameter) {
      return res.status(404).json({
        message: `Parameter not found! Please check the spell or 
          register the parameter and its associated sample` });
    }
    return res.status(200).json(parameter);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { samplePointName, parameter, parameterUnity, parameterValue, samplingDate } = req.body;
      const newParameter = await this.sampleParameterService.create(
        samplePointName,
        parameter,
        parameterUnity,
        parameterValue,
        samplingDate,
      );
      return res.status(201).json(newParameter);
    } catch (error) {
      return res.status(409).json({ message: 'This sample has not been registed yet! Register it first before continue' });
    }
  };

  public deleteParameter = async (req: Request, res: Response): Promise<Response> => {
    const { parameter } = req.params;
    await this.sampleParameterService.deleteParameter(parameter);
    return res.status(204).end();
  };
}

export default SampleParameterController;
