import express from 'express';
import { createHandler } from 'graphql-http/lib/handler/express';
import schema from '../schema/schema.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import userRoutes from '../routes/user.js';
import restaurantRoutes from '../routes/restaurant.js';
import dishRoutes from '../routes/dish.js'
import orderRoutes from '../routes/order.js'

const app = express();

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Lab-3 Grubhub API',
            version: '1.0.0',
            description: 'API and GraphQL documentation for the modernized Lab-3 Prototype',
        },
        servers: [
            {
                url: 'http://localhost:3001',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json());

app.all("/graphql", createHandler({ schema }));

app.listen(3001, () => {
    console.log("Grubhub Server started on port 3001");
    console.log("Swagger docs available at http://localhost:3001/api-docs");
    console.log("GraphQL IDE available at http://localhost:3001/graphql");
})

export default app;
