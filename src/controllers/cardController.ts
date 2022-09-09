import { Request, Response } from "express";

export async function createCard(req: Request, res: Response) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

}