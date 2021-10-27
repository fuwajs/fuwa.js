import http from './../structures/ws/http';
import crypto from 'crypto';
import {
    Interaction,
    InteractionForm,
    InteractionResponseTypes as ResponseTypes,
    ButtonComponent,
    ButtonStyles,
    ActionRow,
} from '../../interfaces';

export class Context {
    protected components = new Map<'buttons' | 'rows', ActionRow>();
    constructor(protected data: Interaction) {}
    /**
     * ! Currently broken
     * @param param0
     * @returns
     */
    button({
        style = 'Primary',
        url,
        id: btnId,
        isDisabled = false,
        content,
    }: {
        content?: string;
        id?: string;
        style?: keyof typeof ButtonStyles;
        url?: string;
        isDisabled?: boolean;
    }) {
        let id;
        if (!url) id = btnId || crypto.randomBytes(16).toString('hex');
        const btn: ButtonComponent = {
            type: 2,
            style: ButtonStyles[style],
            url,
            disabled: isDisabled,
            label: content,
            custom_id: id,
        };
        this.components.set('buttons', {
            type: 1,
            components: [...((this.components.get('buttons') ?? {})?.components || []), btn] as any,
        });
        const self = this.components
            .get('buttons')
            .components.find(b => b.custom_id === id) as ButtonComponent;
        return {
            setContent: (content: string) => (self.label = content),
            setUrl: (url: string) => (self.url = url),
            setStyle: (style: keyof typeof ButtonStyles) => (self.style = ButtonStyles[style]),
            isDisabled: (disabled = false) => (self.disabled = disabled),
        };
    }
    async send(message: InteractionForm, type: keyof typeof ResponseTypes = 'ChannelMessageWithSource') {
        const components = [...(message.components ?? []), ...[...this.components.values()]];
        const data = {
            ...message,
            components,
        };
        await http.POST(
            `/interactions/${this.data.id}/${this.data.token}/callback`,
            JSON.stringify({
                type: ResponseTypes[type],
                data,
            })
        );

        return;
    }
}
