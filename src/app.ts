import express from 'express';
import itemRoutes from './routes/index.ts';
import { errorHandler } from './middlewares/handleErrors.ts';

const app = express();

app.use(express.json());
app.use('/api/', itemRoutes);
app.use(errorHandler);

export default app;