import { prisma } from "../database.js";
import { ICredentialsInsert } from "../types/credentialType.js";

export async function insert(credential: ICredentialsInsert) {
    await prisma.credentials.create({ data: credential })
    return
}

export async function findOne(title: string) {
    const credential = await prisma.credentials.findFirst({ where: { title } })
    return credential
}

export async function getById(id: number) {
    const credentials = await prisma.credentials.findUnique({ where: { id } })
    return credentials
}

export async function findMany(usersId: number) {
    const credentials = await prisma.credentials.findMany({ where: { usersId } })
    return credentials

}

export async function deleteById(id: number) {
    await prisma.credentials.delete({ where: { id } })
    return
}