import { Router } from 'express';
import Points from './points';
import PointParameters from './pointParameters';

const routes = Router();

routes.use('/points', Points);
routes.use('/pointParameters', PointParameters);

export default routes;
