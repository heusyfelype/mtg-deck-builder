export function validateSchemaMiddleware(schema) {

    function validateSchema(req, res, next) {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            throw { type: "joi", message: error.details.map(detail => detail.message) }
        }
        next();
    }

    return validateSchema
}