import User from './discord/User';
import { Logger } from './_logger';

export let token: string;

export let bot: User;

export let logger: Logger;

export function setLogger(newLogger: Logger) {
    return (logger = newLogger)
}
export function setToken(newToken: string) {
    return (token = newToken);
}
export function setBot(user: User) {
    return (bot = user);
}
