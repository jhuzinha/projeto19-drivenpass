import { Request, Response } from "express";
import { tokenWithoutBarear } from "../utils/tokenAux.js";
import { validateToken } from "../services/validateToken.js";
import * as cardFunctions from "../services/cardService.js"
import { ICardsType } from "../types/cardType.js";

export async function createCard(req: Request, res: Response) {
    const card: ICardsType = req.body;
    const token: string = tokenWithoutBarear(req.headers)
    const user = await validateToken(token)
    await cardFunctions.create(card, user.id)
    return res.status(201).send("Card created!")
}

export async function getCard(req: Request, res: Response) {
    const id = Number(req.query.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    const cards = await cardFunctions.get(id, user.id)
    return res.status(200).send(cards)
}

export async function deleteCard(req: Request, res: Response) {
    const id = Number(req.params.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await cardFunctions.deleteById(id, user.id)
    return res.status(200).send("Card deleted!")
}