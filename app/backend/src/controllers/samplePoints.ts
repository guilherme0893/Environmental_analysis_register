import { Request, Response } from 'express';
import SampleService from '../services/samplePoints';
import SamplePointModel from '../models/samplePoints';

class SampleController {
  public sampleService = new SampleService();

  public sampleModel = new SamplePointModel();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const samples = await this.sampleService.getAll();
    return res.status(200).json(samples);
  };

  public getByName = async (req: Request, res: Response): Promise<Response> => {
    const { searchedSample } = req.params;
    const sample = await this.sampleService.getByName(searchedSample);
    if (sample.length === 0 || !sample) {
      return res.status(404).json({
        message: 'Sample not found! Please check the spell or register the sample' });
    }
    return res.status(200).json(sample);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, xCoordinate, yCoordinate } = req.body;
      const sample = await this.sampleService.create(name, xCoordinate, yCoordinate);
      return res.status(201).json(sample);
    } catch (error) {
      return res.status(409).json({
        message: 'Sample already registered',
      });
    }
  };

  public deleteSample = async (req: Request, res: Response): Promise<Response> => {
    const { sampleName } = req.params;
    await this.sampleService.deleteSample(sampleName);
    return res.status(204).end();
  };
}

export default SampleController;
