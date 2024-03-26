import { NextFunction, Request, Response } from 'express';

export class HealthCheckController {
  async healthCheck(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: 'API is running!' });
  }
}
