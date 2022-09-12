import { INotesType } from "../types/notesType.js";
import * as safeNotesFunctions from "../repositories/safeNotesRepository.js";

export async function create(notes: INotesType, id: number) {
    const existNote = await safeNotesFunctions.findOne(notes.title, id)
    if (existNote) {
        throw { type: "Conflict", message: "Title alredy exists" }
    }
    await safeNotesFunctions.insert({ ...notes, usersId: id })
    return
}

export async function get(id: number | null, userId: number) {
    if (isNaN(id!)) { throw { type: "Not Found", message: "Not Found" } }
    if (id) {
        const notes = await safeNotesFunctions.getById(id)
        if (!notes || notes.usersId !== userId) {
            throw { type: "Not Found", message: "Not Found" }
        }
        return notes
    }
    const notes = await safeNotesFunctions.findMany(userId)
    return notes
}

export async function deletebyId(id: number, userId: number) {
    if (!id) {
        throw { type: "Not Found", message: "Not Found" }
    }
    const notes = await safeNotesFunctions.getById(id)
    if (!notes || notes.usersId !== userId) {
        throw { type: "Not Found", message: "Not Found" }
    }
    await safeNotesFunctions.deleteById(id)
    return
}