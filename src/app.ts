import express from 'express';
import mongoose from 'mongoose';
import router from './router';
import swaggerUi from 'swagger-ui-express';
import { DATABASE_URL } from './constants/constants';
import { specs } from './config/swagger-config';

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
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
