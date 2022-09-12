import { ICardsType, ICardsMap } from "../types/cardType.js";
import * as cardFunctions from "../repositories/cardRepository.js"
import { cryptPassword, descryptPassword } from "../utils/cryptPassword.js";

export async function create(card: ICardsType, id: number) {
    const existCard = await cardFunctions.findOne(card.title, id)
    if (existCard) {
        throw { type: "Conflict", message: "Title alredy exists" }
    }
    card.password = cryptPassword(card.password)
    card.codeSecurity = cryptPassword(card.codeSecurity.toString())
    await cardFunctions.insert({ ...card, usersId: id })
    return
}

export async function get(id: number | null, userId: number) {
    if (isNaN(id!)) { throw { type: "Not Found", message: "Not Found" } }
    if (id) {
        const card = await cardFunctions.getById(id)
        if (!card || card.usersId !== userId) {
            throw { type: "Not Found", message: "Not Found" }
        }
        card.password = descryptPassword(card.password)
        card.codeSecurity = descryptPassword(card.codeSecurity)
        return card
    }
    const cards = await cardFunctions.findMany(userId)
    const descrypcard = cards.map((item: ICardsMap) => { return { "title": item.title, "id": item.id, "isVirtual": item.isVirtual } })
    return descrypcard
}

export async function deleteById(id: number, userId: number) {
    if (!id) {
        throw { type: "Not Found", message: "Not Found" }
    }
    const card = await cardFunctions.getById(id)
    if (!card || card.usersId !== userId) {
        throw { type: "Not Found", message: "Not Found" }
    }
    await cardFunctions.deleteById(id)
    return
}