import { Router } from 'express';
// import Parameters from '../routes/sampleParameters';
// import CompleteData from '../routes/completeData';
// import Points from '../routes/samplePoints';
import Points from './points';

const routes = Router();

routes.use('/points', Points);

export default routes;
