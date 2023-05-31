import { Router } from 'express';
import PointsController from '../controllers/points';

const points = new PointsController();

const routes = Router();

routes.get('/index/:id', points.getOne);
routes.get('/index', points.getAll);
routes.post('/create', points.create);
routes.delete('/delete/:id', points.delete);

export default routes;
