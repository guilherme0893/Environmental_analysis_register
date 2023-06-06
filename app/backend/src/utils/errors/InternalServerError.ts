import StatusCodes from '../../enum/statusCode';
import AppError from './appError';

class InternalServerError extends AppError {
  constructor(message: string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

export default InternalServerError;
