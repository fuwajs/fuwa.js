import User from './discord/User';

export let token: string | null;

export let bot: User | null;

export function setToken(newToken: string) {
    return (token = newToken);
}
export function setBot(user: User) {
    return (bot = user);
}
