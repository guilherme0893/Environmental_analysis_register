import { Router } from 'express';
import PointsController from '../controllers/points';
// import PointVerification from '../middlewares/pointVerification';

const points = new PointsController();

// const validation = new PointVerification();

const routes = Router();

routes.get('/index/all', points.getAll);
routes.get('/index/:id', points.getOne);
routes.post('/create', points.create);
routes.delete('/delete/:id', points.delete);

export default routes;
