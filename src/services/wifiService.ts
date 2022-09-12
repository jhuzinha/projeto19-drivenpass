import { IWifiType, IWifiMap } from "../types/wifiType.js";
import * as wifiFunctions from "../repositories/wifiRepository.js"
import { cryptPassword, descryptPassword } from "../utils/cryptPassword.js";


export async function create(wifi: IWifiType, usersId: number) {
    wifi.password = cryptPassword(wifi.password)
    await wifiFunctions.insert({ ...wifi, usersId })
    return
}


export async function get(id: number | null, userId: number) {
    if (isNaN(id!)) { throw { type: "Not Found", message: "Not Found" } }
    if (id) {
        const wifi = await wifiFunctions.getById(id)
        if (!wifi || wifi.usersId !== userId) {
            throw { type: "Not Found", message: "Not Found" }
        }
        wifi.password = descryptPassword(wifi.password)
        return wifi
    }
    const wifi = await wifiFunctions.findMany(userId)
    const descrypwifi = wifi.map((item: IWifiMap) => { return { "title": item.title, "id": item.id, "name": item.name } })
    return descrypwifi
}


export async function deleteById(id: number, userId: number) {
    if (!id) {
        throw { type: "Not Found", message: "Not Found" }
    }
    const wifi = await wifiFunctions.getById(id)
    if (!wifi || wifi.usersId !== userId) {
        throw { type: "Not Found", message: "Not Found" }
    }
    await wifiFunctions.deleteById(id)
    return
}