import Cryptr from 'cryptr';
var cryptr = new Cryptr(process.env.CRYPT_SECRET);
export function cryptPassword(password) {
    var newPassword = cryptr.encrypt(password);
    return newPassword;
}
export function descryptPassword(password) {
    var newPassword = cryptr.decrypt(password);
    return newPassword;
}
