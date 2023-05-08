import StatusCodes from '../../../enum/statusCode';
import RequestError from './RequestError';

class InternalServerError extends RequestError {
  constructor(message: string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

export default InternalServerError;
