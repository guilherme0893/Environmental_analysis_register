import { Router } from 'express';
import SampleController from '../controllers/samplePoints';
import SamplePointsValidation from '../middlewares/samplePoints';

const samples = new SampleController();

const samplesValidation = new SamplePointsValidation();

const routes = Router();

routes.get('/samples', samples.getAll);

routes.post(
  '/samples',
  samplesValidation.sampleNameValidation,
  samplesValidation.xCoordinateValidation,
  samplesValidation.yCoordinateValidation,
  samples.create,
);

export default routes;
