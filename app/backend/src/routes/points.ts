import { Router } from 'express';
import PointsController from '../controllers/points';

const points = new PointsController();

const routes = Router();

routes.post(
  '/create',
  points.create,
);

export default routes;
