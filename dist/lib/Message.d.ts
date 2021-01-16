import Embed from './Embed';
export interface MessageOptions {
    content: string;
    nonce: string | number;
    tts: boolean;
    file?: any;
    embed?: Embed | null;
    payload_json?: string;
}
declare class Message {
    constructor();
}
export default Message;
