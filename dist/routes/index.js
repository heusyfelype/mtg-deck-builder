import { Router } from "express";
import authRouter from "./authRouters/userRouters.js";
import healthCheckRouter from "./healthCheck/healthCheck.js";
const router = Router();
router.use(authRouter);
router.use(healthCheckRouter);
export default router;
