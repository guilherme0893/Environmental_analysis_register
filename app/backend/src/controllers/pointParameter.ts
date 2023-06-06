/* eslint-disable max-len */
import { Request, Response } from 'express';
import PointParameterService from '../services/pointParameter';
import IController from '../interfaces/IController';
import { AppError } from '../utils/errors';
import IPointParameter from '../interfaces/IPointParameter';

class PointParameterController implements IController<IPointParameter> {
  protected pointParameterService = new PointParameterService();

  readonly create = async (req: Request, res: Response): Promise<Response<IPointParameter>> => {
    try {
      const { pointId, parameterId, value } = req.body;
      const pointParameter = await this.pointParameterService.create({
        pointId,
        parameterId,
        value,
      });
      return res.status(201).json({
        status: true,
        message: 'Point parameter created',
        pointParameter,
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
        message: console.log(err),
      });
    }
  };

  readonly getAll = async (req: Request, res: Response): Promise<Response<IPointParameter[]>> => {
    try {
      const pointParameters = await this.pointParameterService.getAll();
      if (pointParameters.length === 0) {
        return res.status(200).json({
          status: true,
          message: 'No points parameter found.',
          pointParameters,
        });
      }
      return res.status(200).json({
        status: true,
        message: 'Point parameter found',
        pointParameters,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: 'Internal server error.',
      });
    }
  };

  readonly getOne = async (req: Request, res: Response): Promise<Response<IPointParameter[]>> => {
    try {
      const { id } = req.params;

      if (!id || id === undefined) {
        return res.status(400).json({
          message: 'Please, provide an id.',
          status: false,
        });
      }

      const pointParameter = await this.pointParameterService.getOne(Number(id));

      if (!pointParameter) {
        return res.status(200).json({
          message: 'No point parameter found.',
          pointParameter,
          status: true,
        });
      }

      return res.status(200).json({
        message: 'Point parameter found',
        pointParameter,
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

  readonly update = async (_req: Request, _res: Response): Promise<Response<IPointParameter>> => {
    throw new Error('Method not implemented.');
  };

  readonly getByParameter = async (req: Request, res: Response): Promise<Response<IPointParameter[]>> => {
    try {
      const { parameterId } = req.params;
      const pointsByParameter = await this.pointParameterService.getByParameter(Number(parameterId));
      return res.status(200).json({
        message: 'Point parameters found',
        pointsByParameter,
      });
    } catch (err) {
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

  readonly delete = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const pointParameter = await this.pointParameterService.delete(Number(id));

      if (!pointParameter) {
        return res.status(404).json({
          message: 'No point parameter found with the given id.',
          status: false,
        });
      }

      return res.status(204).json({
        status: true,
        message: 'Point parameter deleted.',
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

export default PointParameterController;
