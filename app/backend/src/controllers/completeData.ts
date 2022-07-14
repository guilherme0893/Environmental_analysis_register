import { Request, Response } from 'express';
import CompleteDataService from '../services/completeData';

class CompleteDataController {
  public completeDataService = new CompleteDataService();

  public getAll = async (_req:Request, res:Response): Promise<Response> => {
    const completeData = await this.completeDataService.getAll();
    if (completeData.length === 0 || !completeData) {
      return res.status(404).json({
        message: `An error has occurred. Check if there are
         registered samples, otherwise, register some` });
    }
    return res.status(200).json(completeData);
  };

  public getOverlimit = async (_req: Request, res: Response): Promise<Response> => {
    const overlimit = await this.completeDataService.getOverlimit();
    if (!overlimit) {
      return res.status(404).json({
        message: `An error has occurred. Check if there is at least
         one sample registered` });
    }
    return res.status(200).json(overlimit);
  };
}

export default CompleteDataController;
