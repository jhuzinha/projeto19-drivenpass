export function tokenWithoutBarear(headers) {
    var authorization = headers.authorization;
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
    return token;
}
