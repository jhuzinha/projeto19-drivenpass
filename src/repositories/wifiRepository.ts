import { prisma } from "../database.js";
import { IWifiInsert } from "../types/wifiType.js";

export async function insert(wifi: IWifiInsert) {
    await prisma.wifi.create({ data: wifi })
    return
}

export async function getById(id: number) {
    const wifi = await prisma.wifi.findUnique({ where: { id } })
    return wifi
}

export async function findMany(usersId: number) {
    const wifi = await prisma.wifi.findMany({ where: { usersId } })
    return wifi
}


export async function deleteById(id: number) {
    await prisma.wifi.delete({ where: { id } })
    return
}