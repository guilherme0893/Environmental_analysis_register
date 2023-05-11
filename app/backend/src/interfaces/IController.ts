import { Request, Response } from 'express';

interface IController<T> {
  create(req: Request, res: Response): Promise<Response<T>>;
  getAll(req: Request, res: Response): Promise<Response<T[]>>;
  getOne(req: Request, res: Response): Promise<Response<T[]>>;
  update(req: Request, res: Response): Promise<Response<T>>;
  delete(req: Request, res: Response): Promise<typeof res>;
}

export default IController;
