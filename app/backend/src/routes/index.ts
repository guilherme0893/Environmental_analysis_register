import { Router } from 'express';
import Parameters from '../routes/sampleParameters';
import CompleteData from '../routes/completeData';
import Points from '../routes/samplePoints';

const routes = Router();

routes.use('/completeData', CompleteData);
routes.use('/parameters', Parameters);
routes.get('/samples', Points);

export default routes;
