import { Request, Response } from "express";
import { ICredentialsType } from "../types/credentialType.js";
import { validateToken } from "../services/validateToken.js";
import { tokenWithoutBarear } from "../utils/tokenAux.js";
import * as credentialFunctions from '../services/credentialService.js'


export async function createCredential(req: Request, res: Response) {
    const credential: ICredentialsType = req.body;
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await credentialFunctions.create(credential, user.id)
    return res.status(201).send("Credential created!")
}

export async function getCredential(req: Request, res: Response) {
    const { id } = req.query;
    const params = id ? Number(id) : undefined
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    const credentials = await credentialFunctions.get(params, user.id)
    return res.status(200).send(credentials)
}

export async function deleteCredential(req: Request, res: Response) {
    const id = Number(req.params.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await credentialFunctions.deleteById(id, user.id)
    return res.status(200).send("Credential deleted!")
}