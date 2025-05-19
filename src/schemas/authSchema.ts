import Joi from "joi";
import { TUserSigninRequest } from "../requests/TUserSigninRequest.ts"
import { TUserSignupRequest } from "../requests/TUserSignupRequest.ts"

export const signinSchema = Joi.object<TUserSigninRequest>({
    email: Joi.string().email().required(),
    pass: Joi.string().required()
})


export const signupSchema = Joi.object<TUserSignupRequest>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    pass: Joi.string().min(6).required()
})
