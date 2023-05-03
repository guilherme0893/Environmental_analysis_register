import { Request, Response } from 'express';
// import SamplePointModel from '../models/samplePoints';
import PointsService from '../services/points';

class PointController {
  protected pointsService = new PointsService();

  readonly create = async (req: Request, res: Response): Promise<Response> => {
    try {
      // const { name, xCoordinate, yCoordinate } = req.body;
      const sample = await this.pointsService.create(req.body);
      return res.status(201).json(sample);
    } catch (error) {
      return res.status(400).json({
        message: 'Sample already registered',
      });
    }
  };
}

export default PointController;
