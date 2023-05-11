import { Router } from 'express';
import Points from './points';

const routes = Router();

routes.use('/points', Points);

export default routes;
