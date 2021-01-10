import { Message as MessageOptions, User } from './_DiscordAPI';
declare class Message implements MessageOptions {
    author: User;
    constructor();
}
export default Message;
