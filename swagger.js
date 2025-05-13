// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LMS API',
      version: '1.0.0',
      description: 'API pour la gestion des utilisateurs, cours, inscriptions et scores',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // fichier contenant les commentaires Swagger
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
