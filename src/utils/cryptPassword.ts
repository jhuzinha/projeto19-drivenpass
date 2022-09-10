import Cryptr from 'cryptr';
const cryptr = new Cryptr(process.env.CRYPT_SECRET!)

export function cryptPassword(password: string) {
    const newPassword = cryptr.encrypt(password)
    return newPassword
}

export function descryptPassword(password: string) {
    const newPassword = cryptr.decrypt(password)
    return newPassword
}