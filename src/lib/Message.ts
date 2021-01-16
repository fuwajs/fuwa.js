import Embed from './Embed';
export interface MessageOptions {
    content: string
    nonce: string | number
    tts: boolean;
    file?: any // TODO: Discover what the file actually is
    embed?: Embed | null;
    payload_json?: string
}

class Message {
    constructor() {

    }

}

export default Message;