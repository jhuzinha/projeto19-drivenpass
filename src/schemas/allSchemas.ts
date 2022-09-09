import { ObjectSchema } from 'joi';
import loginSchema from './loginSchema.js';
import registerSchema from './registerSchema.js'

interface AllSchemas {
    [key: string]: ObjectSchema
}

const allSchema: AllSchemas = {
    'register': registerSchema,
    'login': loginSchema
}

export default allSchema;