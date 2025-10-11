import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import taskRouter from './routes/taskRoute.js';
import cors from 'cors';
const app = express();

console.log('App is running');

app.use(morgan('dev'));
app.use(express.json());

app.use(
    cors({
        allowedHeaders: ['Content-Type', 'token', 'authorization'],
        exposedHeaders: ['token', 'authorization'],
        origin: ['http://localhost:5173'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        preflightContinue: false,
    }),
);

app.use('/api/v1/task', taskRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
