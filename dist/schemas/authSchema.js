import Joi from "joi";
export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    pass: Joi.string().required()
});
export const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    pass: Joi.string().min(6).required()
});
