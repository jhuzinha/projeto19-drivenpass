export function tokenWithoutBarear(headers: any): string {
    const { authorization } = headers;
    const token = authorization?.replace('Bearer ', '');
    return token
}