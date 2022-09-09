import joi from 'joi';

const safeNotesSchema = joi.object({
    title: joi.string().max(50).required(),
    notes: joi.string().max(1000).required()
});

export default safeNotesSchema;