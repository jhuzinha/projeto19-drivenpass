import { Request, Response } from "express";
import { tokenWithoutBarear } from "../utils/tokenAux.js";
import { validateToken } from "../services/validateToken.js";

export async function createCard(req: Request, res: Response) {
    const token: string = tokenWithoutBarear(req.headers)
    const user = await validateToken(token)

}