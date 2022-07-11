/* eslint-disable max-len */
import CompleteDataModel from '../models/completeData';
import ICompleteData from '../interfaces/ICompleteData';

class CompleteDataService {
  public completeDataModel = new CompleteDataModel();

  public getAll = async (): Promise<ICompleteData[]> => {
    const completeData = await this.completeDataModel.getAll();
    return completeData;
  };

  public getOverlimit = async (): Promise<ICompleteData[]> => {
    const overlimit = await this.completeDataModel.getOverlimit();
    return overlimit;
  };
}

export default CompleteDataService;
