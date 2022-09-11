import { Request, Response } from "express";
import { tokenWithoutBarear } from "../utils/tokenAux.js";
import { validateToken } from "../services/validateToken.js";
import * as wifiFunctions from "../services/wifiService.js"
import { IWifiType } from "../types/wifiType.js";

export async function createWifi(req: Request, res: Response) {
    const wifi: IWifiType = req.body;
    const token: string = tokenWithoutBarear(req.headers)
    const user = await validateToken(token)
    await wifiFunctions.create(wifi, user.id)
    return res.status(201).send("Wifi created!")
}

export async function getWifi(req: Request, res: Response) {
    const id = Number(req.query.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    const cards = await wifiFunctions.get(id, user.id)
    return res.status(200).send(cards)
}

export async function deleteWifi(req: Request, res: Response) {
    const id = Number(req.params.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await wifiFunctions.deleteById(id, user.id)
    return res.status(200).send("Wifi deleted!")
}