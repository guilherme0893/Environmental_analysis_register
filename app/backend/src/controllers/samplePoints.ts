import { Request, Response } from 'express';
import SampleService from '../services/samplePoints';

class SampleController {
  public sampleService = new SampleService();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const samples = await this.sampleService.getAll();
    return res.status(200).json(samples);
  };
}

export default SampleController;
