import AppError from './appError';
import StatusCodes from '../../enum/statusCode';

class ConflictError extends AppError {
  constructor(message: string) {
    super(StatusCodes.CONFLICT, message);
  }
}

export default ConflictError;
