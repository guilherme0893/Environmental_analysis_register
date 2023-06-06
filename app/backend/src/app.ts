import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swagger from './swagger.json';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

export default app;
