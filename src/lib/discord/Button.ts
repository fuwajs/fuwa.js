import Globs from 'util/Global';
import Context from './Context';
import type { Client } from 'lib/structures/handlers/Client';
import { ButtonComponent, ButtonStyles } from 'interfaces';


export class Button {
    protected client = Globs.client as Client;
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
        this.client._interactionListeners.set(this.id, cb);
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
