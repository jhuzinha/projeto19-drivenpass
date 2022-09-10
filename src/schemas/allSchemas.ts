import { ObjectSchema } from 'joi';
import loginSchema from './loginSchema.js';
import registerSchema from './registerSchema.js'
import credentialSchema from './credentialSchema.js'
import safeNotesSchema from './safeNotesSchema.js'

interface AllSchemas {
    [key: string]: ObjectSchema
}

const allSchema: AllSchemas = {
    'register': registerSchema,
    'login': loginSchema,
    'credential': credentialSchema,
    'safeNote': safeNotesSchema
}

export default allSchema;