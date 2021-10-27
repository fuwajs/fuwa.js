import http from './../structures/ws/http';
import { Interaction, InteractionForm, InteractionResponseTypes as ResponseTypes } from '../../interfaces';
import { Message } from './Message';

export class Context {
    constructor(protected data: Interaction) {}

    send(...messages: { type: keyof typeof ResponseTypes; message: InteractionForm }[]): Promise<any[]> {
        return Promise.all(
            messages.map(msg =>
                http.POST(
                    `/interactions/${this.data.id}/${this.data.token}/callback`,
                    JSON.stringify({ ...msg, type: ResponseTypes[msg.type] })
                )
            )
        );
    }
}
