import { Router } from "express";
import  authRouter from "./authRouters/userRouters.ts"
import  healthCheckRouter from "./healthCheck/healthCheck.ts"

const router: Router = Router();

router.use(authRouter)
router.use(healthCheckRouter)

export default router;