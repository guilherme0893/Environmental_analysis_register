import express, { Request, Response } from 'express';
import Samples from './routes/samplePoints';

const app = express();

app.use(express.json());

app.use(Samples);

// app.get('/', (_request: Request, response: Response) =>
//   response.send({ status: 'I am alive!' }));

export default app;
