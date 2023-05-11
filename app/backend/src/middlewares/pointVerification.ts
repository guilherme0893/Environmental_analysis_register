import { NextFunction, Request, Response } from 'express';

class PointsValidation {
  public sampleNameValidation = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name || name === '') {
      return res.status(400).json({ message: 'The sample must have a name' });
    }
    next();
  };

  public xCoordinateValidation = (req: Request, res: Response, next: NextFunction) => {
    const { xCoordinate } = req.body;
    if (!xCoordinate) {
      return res.status(400).json({ message: 'xCoordinate is required' });
    }
    if (typeof xCoordinate !== 'number') {
      return res.status(422).json({ message: 'xCoordinate must be a number' });
    }
    if (xCoordinate < -90 || xCoordinate > 90) {
      return res.status(422).json({
        message: 'The xCoordinate must have a valid value!' });
    }
    next();
  };

  public yCoordinateValidation = (req: Request, res: Response, next: NextFunction) => {
    const { yCoordinate } = req.body;
    if (!yCoordinate) {
      return res.status(400).json({ message: 'yCoordinate is required' });
    }
    if (typeof yCoordinate !== 'number') {
      return res.status(422).json({ message: 'yCoordinate must be a number' });
    }
    if (yCoordinate < -180 || yCoordinate > 180) {
      return res.status(422).json({
        message: 'The yCoordinate must have a valid value' });
    }
    next();
  };
}

export default PointsValidation;
