import jwt from 'jsonwebtoken';
import * as userFunctions from '../repositories/userRepository.js';
import { IUsersType } from '../types/userType.js';
import bcrypt from 'bcrypt';

export async function createUser(user: IUsersType) {
    const existUser = await userFunctions.findOne(user.email)
    if (existUser) {
        throw { type: "Conflict", message: "Email alredy used" }
    }
    const password = bcrypt.hashSync(user.password, 8)
    const data: IUsersType = {
        email: user.email,
        password
    }
    await userFunctions.insert(data)
    return
}

export async function loginUser(user: IUsersType) {
    const existUser = await userFunctions.findOne(user.email)
    if (!existUser) {
        throw { type: "Unauthorized", message: "Password or Email wrong" }
    }
    if (!bcrypt.compare(user.password, existUser.password)) {
        throw { type: "Unauthorized", message: "Password or Email wrong" }
    }
    const token = jwt.sign({ id: existUser.id }, process.env.SECRET_TOKEN, { expiresIn: '1d' })
    console.log(jwt.verify(token, process.env.SECRET_TOKEN))
    return token
}
