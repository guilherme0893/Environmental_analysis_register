abstract class AppError extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  public readonly isOperational: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = true;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default AppError;
