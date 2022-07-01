import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_request: Request, response: Response) =>
  response.send({ status: 'I am alive!'}));

export default app;
