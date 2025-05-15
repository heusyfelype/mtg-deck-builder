import Joi from "joi";
import { TUserSigninRequest } from "../requests/TUserSigninRequest.ts"
import { TUserSignupRequest } from "../requests/TUserSignupRequest.ts"

export const signupSchema = Joi.object<TUserSigninRequest>({
    email: Joi.string().email().required(),
    pass: Joi.string().min(10).required()
})


export const signinSchema = Joi.object<TUserSignupRequest>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    pass: Joi.string().required()
})
