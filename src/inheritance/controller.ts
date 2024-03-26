import { Request, Response } from 'express';

export interface Controller<E> {
  create(req: Request, res: Response): Promise<Response<string>>;
  findAll(req: Request, res: Response): Promise<Response<E[]>>;
  findOne(req: Request, res: Response): Promise<Response<E>>;
  update(req: Request, res: Response): Promise<Response<E>>;
  delete(req: Request, res: Response): Promise<Response<void>>;
}
