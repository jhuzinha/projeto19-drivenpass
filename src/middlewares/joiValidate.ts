import allschemas from '../schemas/allSchemas.js';
import { Request, Response, NextFunction } from 'express';


export default function Validate(schema: string) {
    if(!allschemas.hasOwnProperty(schema)){
        throw {type: "Not Found", message: "Alguma informação está errada"}
    }
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const validated = allschemas[schema].validate(req.body, { abortEarly: true })
            if (validated.error) {
                return res.status(422).send(validated.error.message);
            }
            next();
        } catch (err) {
            res.sendStatus(500)
        }
    }
}