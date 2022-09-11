import { prisma } from "../database.js";
import { ICardsInsert } from "../types/cardType.js";

export async function insert(card: ICardsInsert) {
    await prisma.cards.create({ data: card })
    return
}

export async function findOne(title: string, usersId: number) {
    const card = await prisma.cards.findUnique({ where: { cardsId: { title, usersId } } })
    return card
}

export async function getById(id: number) {
    const card = await prisma.cards.findUnique({ where: { id } })
    return card
}

export async function findMany(usersId: number) {
    const cards = await prisma.cards.findMany({ where: { usersId } })
    return cards

}

export async function deleteById(id: number) {
    await prisma.cards.delete({ where: { id } })
    return
}