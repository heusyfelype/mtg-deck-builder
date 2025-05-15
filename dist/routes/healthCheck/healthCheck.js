import { Router } from "express";
const healthCheckRouter = Router();
healthCheckRouter.get("/healthCheck", (req, res) => { res.sendStatus(200); });
export default healthCheckRouter;
