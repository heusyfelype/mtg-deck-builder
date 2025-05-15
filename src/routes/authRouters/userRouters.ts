import { Router } from "express";
import { registerUserController } from "../../controllers/authController.ts";
import { validateSchemaMiddleware } from "../../middlewares/validateSchema.ts";
import { signinSchema, signupSchema } from "../../schemas/authSchema.ts";

const authRouter: Router = Router();

authRouter.post("/signup", validateSchemaMiddleware(signupSchema), registerUserController)
//authRouter.post("/signin", validateSchemaMiddleware(signinSchema), signInController)

export default authRouter