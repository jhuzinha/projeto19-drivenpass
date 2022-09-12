import loginSchema from './loginSchema.js';
import registerSchema from './registerSchema.js';
import credentialSchema from './credentialSchema.js';
import safeNotesSchema from './safeNotesSchema.js';
import cardSchema from './cardSchema.js';
import wifiSchema from './wifiSchema.js';
var allSchema = {
    'register': registerSchema,
    'login': loginSchema,
    'credential': credentialSchema,
    'safeNote': safeNotesSchema,
    'card': cardSchema,
    'wifi': wifiSchema
};
export default allSchema;
