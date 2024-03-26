import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Express API With Mongo and Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
    },
  },
  apis: [
    path.resolve(__dirname, '../../router.ts'),
    path.resolve(__dirname, '../../book/entity/book.schema.ts'),
  ],
} as swaggerJSDoc.Options;

export const specs = swaggerJSDoc(options);
