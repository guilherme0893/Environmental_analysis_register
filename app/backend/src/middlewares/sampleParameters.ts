import { NextFunction, Request, Response } from 'express';

const parameterNames = [
  'aluminio dissolvido',
  'arsenio total',
  'chumbo total',
  'cobre dissolvido',
  'escherichia coli',
  'cromo total',
  'cadmio total',
  'DBO',
];
class ParametersValidation {
  public samplePointNameValidation = (req: Request, res: Response, next: NextFunction) => {
    const { samplePointName } = req.body;
    if (!samplePointName || samplePointName === '') {
      return res.status(400).json({
        message: 'The sample point is required, please register it before continue' });
    }
    next();
  };

  public parameterValidation = (req: Request, res: Response, next: NextFunction) => {
    const { parameter } = req.body;
    if (!parameter || parameter === '') {
      return res.status(400).json({ message: 'The parameter is required' });
    }
    if (!parameterNames.includes(parameter)) {
      return res.status(400).json({
        message: `Please check if the parameter is correct. 
          We are currently accepting the following parameters: aluminio dissolvido, arsenio total,
            chumbo total, cobre dissolvido, escherichia coli, cromo total, cadmio total, DBO.`,
      });
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

  // public parameterCheck = async (req: Request, res: Response, next: NextFunction) => {
  //   const { samplePointName, parameter, parameterUnity, parameterValue, samplingDate } = req.body;
  //   const newParameter = {
  //     samplePointName,
  //     parameter,
  //     parameterUnity,
  //     parameterValue,
  //     samplingDate,
  //   };
  //   const checkParameter = await this.sampleParameterService.getByName(parameter);
  //   const finalCheck = checkParameter.find((p) => p === newParameter);
  //   finalCheck
  //     ? res.status(409).json({ message: 'These informations have already been registered' })
  //     : res.status(201).json(newParameter);
  // //   next();
  // };
}

export default ParametersValidation;
