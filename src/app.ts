import express from 'express';
import mongoose from 'mongoose';
import router from './router';
import swaggerUi from 'swagger-ui-express';
import { DATABASE_URL } from './constants/constants';
import { specs } from './common/swagger/swagger-config';
import { errorMiddleware } from './common/error/error-handler.middleware';

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.database();
    this.routes();
    this.app.use(errorMiddleware);
  }

  private middlewares() {
    this.app.use(express.json({ limit: '50mb' }));
  }

  private async database() {
    try {
      await mongoose.connect(DATABASE_URL);
      console.log('Connected to database.');
    } catch (err) {
      console.log('Error connecting to database.', err);
    }
  }

  private routes() {
    this.app.use(router);
    this.app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));
  }
}

export default new App().app;
