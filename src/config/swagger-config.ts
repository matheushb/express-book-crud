import swaggerJSDoc from 'swagger-jsdoc';
import { PORT } from '../constants/constants';
import path from 'path';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Express API With Mongo and Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Matheus Baraldi',
        email: 'matheushbaraldi@gmail.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [path.resolve(__dirname, '../router.ts')],
};

export const specs = swaggerJSDoc(options);
