import { Request, Response } from "express";
import { IWifiType } from "../types/wifiType";

export async function createWifi(req: Request, res: Response) {
    const wifi: IWifiType = req.body;

}

export async function getWifi(req: Request, res: Response) {

}

export async function deleteWifi(req: Request, res: Response) {

}