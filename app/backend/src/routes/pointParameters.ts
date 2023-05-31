import { Router } from 'express';
import PointsParametersController from '../controllers/pointParameter';

const pointParameters = new PointsParametersController();

const routes = Router();

routes.get('/index/parameter/:parameterId', pointParameters.getByParameter);
routes.get('/index/:id', pointParameters.getOne);
routes.get('/index', pointParameters.getAll);
routes.post('/create', pointParameters.create);
routes.delete('/delete/:id', pointParameters.delete);

export default routes;
