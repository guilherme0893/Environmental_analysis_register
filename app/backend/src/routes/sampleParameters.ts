import { Router } from 'express';
import SampleParameterController from '../controllers/sampleParameters';
import ParametersValidation from '../middlewares/sampleParameters';

const parameter = new SampleParameterController();

const parametersValidation = new ParametersValidation();

const routes = Router();

routes.post(
  '/parameters',
  parametersValidation.samplePointNameValidation,
  parametersValidation.parameterValidation,
  parametersValidation.parameterUnityValidation,
  parametersValidation.parameterValueValidation,
  parameter.create,
);

routes.get('/parameters', parameter.getAll);

routes.get(
  '/parameters/:searchedParameter',
  parameter.getByName,
);

export default routes;
