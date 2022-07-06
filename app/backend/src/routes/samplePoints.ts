import { Router } from 'express';
import SampleController from '../controllers/samplePoints';

const samples = new SampleController();

const routes = Router();

routes.get('/', samples.getAll);

routes.post('/', samples.create);

export default routes;
