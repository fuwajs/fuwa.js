import User from './discord/User';

export let token: string | null = null;

export let bot: User | null = null;

export function setToken(newToken: string) {
    return (token = newToken);
}
export function setBot(user: User) {
    return (bot = user);
}
