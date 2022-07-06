import { Request, Response } from 'express';
import SampleParameterService from '../services/sampleParameters';

class SampleParameterController {
  public sampleParameterService = new SampleParameterService();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const parameters = await this.sampleParameterService.getAll();
    return res.status(200).json(parameters);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { samplePointName, parameter, parameterUnity, parameterValue } = req.body;
    const newParameter = await this.sampleParameterService.create(
      samplePointName,
      parameter,
      parameterUnity,
      parameterValue,
    );
    return res.status(201).json(newParameter);
  };
}

export default SampleParameterController;
