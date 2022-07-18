/* eslint-disable max-lines-per-function */
import connection from './connection';
import ICompleteData from '../interfaces/ICompleteData';

class CompleteDataModel {
  public getAll = async (): Promise<ICompleteData[]> => {
    const query = `
    SELECT * FROM
    (SELECT
            points.name,
            parameters.parameter,
            parameters.parameterUnity,
            parameters.parameterValue,
            points.x_coordinate,
            points.y_coordinate,
            parameters.samplingDate
        FROM samplePoints AS points
        LEFT JOIN sampleParameters AS parameters
        ON points.name = parameters.samplePointName) AS overlimitParameters;`;
    // ORDER BY points.name;`;
    const [completeData] = await connection.execute(query);
    return completeData as ICompleteData[];
  };

  public getOverlimit = async (): Promise<ICompleteData[]> => {
    const query = `
    SELECT
            points.name,
            parameters.parameter,
            parameters.parameterUnity,
            parameters.parameterValue,
            points.x_coordinate,
            points.y_coordinate,
            parameters.samplingDate
        FROM samplePoints AS points
        LEFT JOIN sampleParameters AS parameters
        ON points.name = parameters.samplePointName
    WHERE (parameter = 'cadmio' AND parameterValue > 0.001) 
    OR (parameter = 'cromo total' AND parameterValue > 0.01)
    OR (parameter = 'aluminio dissolvido' AND parameterValue > 0.1)
    OR (parameter = 'arsenio total' AND parameterValue > 0.01)
    OR (parameter = 'chumbo total' AND parameterValue > 0.01)
    OR (parameter = 'cobre dissolvido' AND parameterValue > 0.009)
    OR (parameter = 'escherichia coli' AND parameterValue > 1000)
    OR (parameter = 'DBO' AND parameterValue > 5);`;
    const [overlimit] = await connection.execute(query);
    return overlimit as ICompleteData[];
  };
}

export default CompleteDataModel;
