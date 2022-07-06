import express from 'express';
import Samples from './routes/samplePoints';
import Parameters from './routes/sampleParameters';

const app = express();

app.use(express.json());

app.use(Samples);

app.use(Parameters);

// app.get('/', (_request: Request, response: Response) =>
//   response.send({ status: 'I am alive!' }));

export default app;
