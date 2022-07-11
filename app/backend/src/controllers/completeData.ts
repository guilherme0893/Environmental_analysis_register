import { Request, Response } from 'express';
import CompleteDataService from '../services/completeData';

class CompleteDataController {
  public completeDataService = new CompleteDataService();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const completeData = await this.completeDataService.getAll();
    return res.status(200).json(completeData);
  };

  public getOverlimit = async (_req: Request, res: Response): Promise<Response> => {
    const overlimit = await this.completeDataService.getOverlimit();
    return res.status(200).json(overlimit);
  };
}

export default CompleteDataController;
