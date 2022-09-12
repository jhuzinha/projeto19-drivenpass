import joi from "joi";
var cardSchema = joi.object({
    title: joi.string().required(),
    number: joi.number().required(),
    nameCard: joi.string().required(),
    codeSecurity: joi.number().required(),
    expirationDate: joi.string().required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().strict().required(),
    type: joi.valid('credit', 'debit', 'both').required()
});
export default cardSchema;
