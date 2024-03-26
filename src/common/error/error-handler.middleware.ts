import { Mongoose, MongooseError } from 'mongoose';
import HttpException from './types/http.exception';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  error: Error | HttpException | MongooseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
    });
  }
  if (error.name == 'CastError') {
    return res.status(400).json({
      statusCode: 400,
      error: 'Bad Request',
      message: error.message,
    });
  }

  const statusCode = 500;

  const message = error.message || 'Internal Server Error';
  res.status(statusCode).json({
    statusCode,
    message,
  });
  next();
};
