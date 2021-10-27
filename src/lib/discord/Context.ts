import http from '@structures/ws/http';
import { MessageForm, Interaction } from '@interfaces';
import { Message } from './Message';

export class Context {
    constructor(protected data: Interaction) {}

    send(...messages: MessageForm[]): Promise<Message[]> {
        return Promise.all(
            messages.map(msg =>
                http
                    .POST(`/channels/${this.data.channel_id}/messages`, JSON.stringify(msg))
                    .then(raw => new Message(raw))
            )
        );
    }
}
