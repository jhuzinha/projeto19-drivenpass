import joi from "joi";

const credentialSchema = joi.object({
    title: joi.string().trim().required(),
    url: joi.string().uri().required(),
    userName: joi.string().trim().required(),
    password: joi.string().required()
})

export default credentialSchema;