import { Request, Response } from "express";
import * as userService from '../services/userService.js'
import { IUsersType } from "../types/userType.js";

export async function loginUser(req: Request, res: Response) {
    const user: IUsersType = req.body;
    const token = await userService.loginUser(user)
    return res.status(200).send(token)
}

export async function registerUser(req: Request, res: Response) {
    const user: IUsersType = req.body;
    await userService.createUser(user)
    return res.status(201).send("User created successfully!")
}
