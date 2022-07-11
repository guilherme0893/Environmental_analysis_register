import { Router } from 'express';
import CompleteDataController from '../controllers/completeData';

const completeData = new CompleteDataController();

const routes = Router();

routes.get('/completeData', completeData.getAll);

routes.get('/overlimitData', completeData.getOverlimit);

export default routes;
