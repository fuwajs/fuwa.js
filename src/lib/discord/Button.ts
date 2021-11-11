import Globs from 'util/Global';
import Context from './Context';
import type { Client } from 'lib/structures/handlers/Client';
import { ButtonComponent, ButtonStyles } from 'interfaces';

export class Button {
    protected client = Globs.client as Client;
    constructor(protected ctx: Context, protected self: ButtonComponent, public id: string) {}

    setContent(content: string) {
        this.self.label = content;
        return this;
    }
    setUrl(url: string) {
        this.self.url = url;
        return this;
    }
    setStyle(style: keyof typeof ButtonStyles) {
        this.self.style = ButtonStyles[style];
        return this;
    }
    disable(disabled = true) {
        this.self.disabled = disabled;
        return this;
    }
    onClick(cb: (ctx: Context) => any) {
        this.client.interactionListeners.set(this.id, cb);
        return this;
    }
    exit() {
        return this.ctx;
    }
}

export interface ButtonParams {
    content?: string;
    id?: string;
    /**
     * @default Primary
     */
    style?: keyof typeof ButtonStyles;
    url?: string;
    isDisabled?: boolean;
}
