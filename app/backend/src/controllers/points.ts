import { Request, Response } from 'express';
import PointsService from '../services/points';
import IController from '../interfaces/IController';
import IPoint from '../interfaces/IPoint';
import { AppError } from '../utils/errors';

class PointController implements IController<IPoint> {
  protected pointsService = new PointsService();

  readonly create = async (req: Request, res: Response): Promise<Response<IPoint>> => {
    try {
      const { name, xCoordinate, yCoordinate } = req.body;
      const point = await this.pointsService.create({ name, xCoordinate, yCoordinate });
      return res.status(201).json({
        status: true,
        message: 'Point created',
        point,
      });
    } catch (err: any) {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: false,
          error: err.message,
        });
      }
      return res.status(500).json({
        error: 'Internal server error.',
      });
    }
  };

  readonly getAll = async (req: Request, res: Response): Promise<Response<IPoint[]>> => {
    try {
      const points = await this.pointsService.getAll();
      if (points.length === 0) {
        return res.status(200).json({
          status: true,
          message: 'No points found.',
          points,
        });
      }
      return res.status(200).json({
        status: true,
        message: 'Points found',
        points,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: 'Internal server error.',
      });
    }
  };

  readonly getByParameter = async (req: Request, res: Response): Promise<Response<IPoint[]>> => {
    try {
      const { parameterId } = req.params;
      if (!parameterId || parameterId === undefined) {
        return res.status(400).json({
          message: 'Please, provide an id.',
          status: false,
        });
      }

      const pointsByParameter = await this.pointsService.getByParameter(Number(parameterId));

      return res.status(200).json({
        status: true,
        message: 'Points by parameter found',
        pointsByParameter,
      });
    } catch (err: any) {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: false,
          error: err.message,
        });
      }
      return res.status(500).json({
        error: 'Internal server error.',
      });
    }
  };

  readonly getOne = async (req: Request, res: Response): Promise<Response<IPoint[]>> => {
    try {
      const { id } = req.params;

      if (!id || id === undefined) {
        return res.status(400).json({
          message: 'Please, provide an id.',
          status: false,
        });
      }

      const point = await this.pointsService.getOne(Number(id));

      if (!point) {
        return res.status(200).json({
          message: 'No point found.',
          point,
          status: true,
        });
      }

      return res.status(200).json({
        message: 'Point found',
        point,
        status: true,
      });
    } catch (err: any) {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: false,
          error: err.message,
        });
      }
      return res.status(500).json({
        error: 'Internal server error.',
      });
    }
  };

  readonly update = async (_req: Request, _res: Response): Promise<Response<IPoint>> => {
    throw new Error('Method not implemented.');
  };

  readonly delete = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const point = await this.pointsService.delete(Number(id));

      if (!point) {
        return res.status(404).json({
          message: 'No point found with the given id.',
          status: false,
        });
      }

      return res.status(204).json({
        status: true,
        message: 'Point deleted.',
      });
    } catch (err: any) {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: false,
          error: err.message,
        });
      }
      return res.status(500).json({
        error: 'Internal server error.',
      });
    }
  };
}

export default PointController;
