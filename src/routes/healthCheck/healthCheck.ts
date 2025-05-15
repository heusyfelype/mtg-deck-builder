import { Router } from "express";
import { Request, Response } from "express";

const healthCheckRouter: Router = Router();

healthCheckRouter.get("/healthCheck", (req: Request, res: Response) => { res.sendStatus(200) })

export default healthCheckRouter