export class InvalidToken extends Error {
    name = 'InvalidTokenError';
    constructor() {
        super('An invalid token was passed');
    }
}
