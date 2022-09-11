import { prisma } from "../database.js";
import { INotesInsert } from "../types/notesType.js";

export async function insert(data: INotesInsert) {
    await prisma.notes.create({ data })
}

export async function findOne(title: string, usersId: number) {
    const notes = prisma.notes.findUnique({ where: { notesId: { title, usersId } } })
    return notes
}

export async function getById(id: number) {
    const notes = await prisma.notes.findUnique({ where: { id } })
    return notes
}

export async function findMany(usersId: number) {
    const notes = await prisma.notes.findMany({ where: { usersId } })
    return notes
}

export async function deleteById(id: number) {
    await prisma.notes.delete({ where: { id } })
}


