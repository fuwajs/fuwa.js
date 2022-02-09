import Globs from '../../util/Global.ts';
import Context from './Context.ts';
import type { Client } from '../structures/handlers/Client.ts';
import { ButtonComponent, ButtonStyles } from '../../interfaces/index.ts';

export class Button {
    constructor(protected ctx: Context, protected self: ButtonComponent, public id: string) {}

    public setContent(content: string): this {
        this.self.label = content;
        return this;
    }
    public setUrl(url: string): this {
        this.self.url = url;
        return this;
    }
    public setStyle(style: keyof typeof ButtonStyles): this {
        this.self.style = ButtonStyles[style];
        return this;
    }
    public disable(disabled = true): this {
        this.self.disabled = disabled;
        return this;
    }
    public onClick(cb: (ctx: Context) => any): this {
        const client = Globs.client as Client;
        client._interactionListeners.set(this.id, cb);
        return this;
    }
    public exit(): Context {
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
