import StatusCodes from '../../../enum/statusCode';
import RequestError from './RequestError';

class Conflict extends RequestError {
  constructor(message: string) {
    super(StatusCodes.CONFLICT, `The ${message} is already registered.`);
  }
}

export default Conflict;
