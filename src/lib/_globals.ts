import User from './discord/User';
import Debug from './_Debug';

export let token: string | null = null;

export let bot: User | null = null;

export let debug: Debug | null = null;
export function setToken(_token: string) {
    return (token = _token);
}
export function setBot(user: User) {
    return (bot = user);
}

export function setDebug(_debug: Debug) {
    return (debug = _debug);
}
