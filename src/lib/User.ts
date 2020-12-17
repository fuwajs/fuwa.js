export class User {
  id: string;
  username: string;
  discriminator: string;
  bot: boolean;
  avatar: null | string;
  verified?: boolean;
  mfa_enabled?: boolean;
  flags?: number;
  email?: null | string;
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
  }) {
    this.id = data.id;
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.bot = data.bot;
    this.avatar = data.avatar;
    this.verified = data.verified;
    this.mfa_enabled = data.mfa_enabled;
    this.flags = data.flags;
    this.email = data.email;
  }
}

export default User;
