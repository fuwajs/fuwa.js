export declare class User {
    id: string;
    username: string;
    discriminator: string;
    bot: boolean;
    avatar: null | string;
    verified?: boolean;
    mfa_enabled?: boolean;
    flags?: number;
    email?: string;
    constructor(data: {
        id: string;
        username: string;
        discriminator: string;
        bot: boolean;
        avatar: null | string;
        verified?: boolean;
        mfa_enabled?: boolean;
        flags?: number;
        email?: null | string;
    });
}
export default User;
