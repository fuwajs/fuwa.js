import User from './discord/User';
export declare let token: string | null;
export declare let bot: User | null;
export declare function setToken(newToken: string): string;
export declare function setBot(user: User): User;
