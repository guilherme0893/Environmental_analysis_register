import StatusCodes from '../../../enum/statusCode';
import RequestError from './RequestError';

class BadRequestError extends RequestError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export default BadRequestError;
