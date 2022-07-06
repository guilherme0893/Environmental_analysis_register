import { Router } from 'express';
import SampleParameterController from '../controllers/sampleParameters';

const parameter = new SampleParameterController();

const routes = Router();

routes.get('/parameters', parameter.getAll);

routes.post('/parameters', parameter.create);

export default routes;
