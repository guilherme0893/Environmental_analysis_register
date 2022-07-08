import { NextFunction, Request, Response } from 'express';

class ParametersValidation {
  public samplePointNameValidation = (req: Request, res: Response, next: NextFunction) => {
    const { samplePointName } = req.body;
    if (!samplePointName || samplePointName === '') {
      return res.status(400).json({ message: 'The sample point is required' });
    }
    next();
  };

  public parameterValidation = (req: Request, res: Response, next: NextFunction) => {
    const { parameter } = req.body;
    if (!parameter || parameter === '') {
      return res.status(400).json({ message: 'The parameter is required' });
    }
    next();
  };

  public parameterUnityValidation = (req: Request, res: Response, next: NextFunction) => {
    const { parameterUnity } = req.body;
    if (!parameterUnity || parameterUnity === '') {
      return res.status(400).json({ message: 'The parameter unity is required' });
    }
    next();
  };

  public parameterValueValidation = (req: Request, res: Response, next: NextFunction) => {
    const { parameterValue } = req.body;
    if (!parameterValue || parameterValue === '') {
      return res.status(400).json({ message: 'The parameter value unity is required' });
    }
    if (typeof parameterValue !== 'number') {
      return res.status(422).json({ message: 'Parameter value must be a number' });
    }
    next();
  };
}

export default ParametersValidation;
