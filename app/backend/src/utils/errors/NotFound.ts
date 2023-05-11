import StatusCodes from '../../enum/statusCode';
import AppError from './appError';

class NotFoundError extends AppError {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
  }
}

export default NotFoundError;
