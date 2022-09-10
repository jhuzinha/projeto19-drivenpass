import { Request, Response } from "express";
import { validateToken } from "../services/validateToken.js";
import { INotesType } from "../types/notesType.js";
import { tokenWithoutBarear } from "../utils/tokenAux.js";
import * as safeNotesFunctions from "../services/safeNotesService.js"

export async function createNotes(req: Request, res: Response) {
    const notes: INotesType = req.body;
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await safeNotesFunctions.create(notes, user.id)
    return res.status(201).send("Note Created!")
}

export async function getNotes(req: Request, res: Response) {
    const id = Number(req.query.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    const notes = await safeNotesFunctions.get(id, user.id)
    return res.status(200).send(notes)
}

export async function deleteNotes(req: Request, res: Response) {
    const id = Number(req.params.id);
    const token = tokenWithoutBarear(req.headers);
    const user = await validateToken(token);
    await safeNotesFunctions.deletebyId(id, user.id)
    return res.status(200).send("Note deleted!")
}