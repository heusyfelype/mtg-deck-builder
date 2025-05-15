import express from 'express';
import itemRoutes from "./routes/index.js";
import { errorHandler } from "./middlewares/handleErrors.js";
const app = express();
app.use(express.json());
app.use('/api/', itemRoutes);
app.use(errorHandler);
export default app;
