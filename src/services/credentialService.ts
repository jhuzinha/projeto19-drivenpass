import { ICredentialsType, ICredentialMap } from "../types/credentialType.js";
import * as credentialFunctions from '../repositories/credentialRepository.js';
import { cryptPassword, descryptPassword } from "../utils/cryptPassword.js";

export async function create(credential: ICredentialsType, id: number) {
    const existCredential = await credentialFunctions.findOne(credential.title, id)
    if (existCredential) {
        throw { type: "Conflict", message: "Title alredy exists" }
    }
    credential.password = cryptPassword(credential.password)
    await credentialFunctions.insert({ ...credential, usersId: id })
    return
}

export async function get(id: number, userId: number) {

    if (id) {
        const credentials = await credentialFunctions.getById(id)
        if (!credentials || credentials.usersId !== userId) {
            throw { type: "Not Found", message: "Not Found" }
        }
        credentials.password = descryptPassword(credentials.password)
        return credentials
    }
    if (isNaN(id)) { throw { type: "Not Found", message: "Not Found" } }
    const credentials = await credentialFunctions.findMany(userId)
    const descrypCredential = credentials.map((item: ICredentialMap) => { return { "title": item.title, "id": item.id, "url": item.url } })
    return descrypCredential
}

export async function deleteById(id: number, userId: number) {
    if (!id) {
        throw { type: "Not Found", message: "Not Found" }
    }
    const credential = await credentialFunctions.getById(id)
    if (!credential || credential.usersId !== userId) {
        throw { type: "Not Found", message: "Not Found" }
    }
    await credentialFunctions.deleteById(id)
    return
}