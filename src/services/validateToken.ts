import jwt from 'jsonwebtoken';
import * as userFunctions from '../repositories/userRepository.js';

interface TokenPayload {
    id: number,
    iat: number,
    exp: number
}

export async function validateToken(userToken: string) {
    if (!userToken) {
        throw { type: "Unauthorized", message: "Token Invalid" }
    }
    try {
        const data = jwt.verify(userToken, process.env.SECRET_TOKEN);
        const { id } = data as TokenPayload
        const user = await userFunctions.findById(id)
        if (!user) {
            throw { type: "Unauthorized", message: "Unauthorized" }
        }
        return user
    } catch (err) {
        throw { type: "Unauthorized", message: "Token Invalid" }
    }
}