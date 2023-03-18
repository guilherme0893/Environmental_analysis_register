import { Request, Response } from 'express';
import SamplePointModel from '../models/samplePoints';
import PointsService from '../services/points';

class PointController {
  public pointsService = new PointsService();

  public sampleModel = new SamplePointModel();

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, xCoordinate, yCoordinate } = req.body;
      const sample = await this.pointsService.create(name, xCoordinate, yCoordinate);
      return res.status(201).json(sample);
    } catch (error) {
      return res.status(400).json({
        message: 'Sample already registered',
      });
    }
  };
}

export default PointController;
