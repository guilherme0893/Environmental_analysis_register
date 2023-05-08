import StatusCodes from '../../../enum/statusCode';
import RequestError from './RequestError';

class NotFoundError extends RequestError {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
  }
}

export default NotFoundError;
