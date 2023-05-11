import StatusCodes from '../../enum/statusCode';
import AppError from './appError';

class BadRequestError extends AppError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export default BadRequestError;
