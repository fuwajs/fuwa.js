import { Embed as IEmbed } from '../../interfaces/message';

export type Media = {
    url: string;
    proxy_url: string;
    height: number;
    width: number;
};

export type EmbedType = 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';

export interface AuthorOpts {
    name: string;
    url?: string;
    icon?: string;
    proxyIcon?: string;
}

/**
 * The Fuwa#Embed class is a built in way to create beautiful Discord embeds with our API.
 * This class extends the basic discord api with more functions.
 */
export class Embed implements IEmbed {
    /** The type of embed for discord's api */
    type = 'rich';
    title?: string;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number;
    footer?: {
        text: string;
        icon_url: string;
        proxy_icon_url: string;
    };
    image?: Media;
    thumbnail?: Media;
    video?: Media;
    provider?: {
        url: string;
        name: string;
    };
    author?: {
        proxy_icon_url: string;
        icon_url: string;
        url: string;
        name: string;
    };
    fields?: { name: string; value: string; inline?: boolean }[] = [];
    constructor(opts?: IEmbed) {
        if (opts) {
            // Don't override the default unless specified
            Object.assign(this, {
                type: 'rich',
                ...(opts ?? {}),
                timestamp: new Date(opts.timestamp),
            });
        }
    }

    /**
     * @param description Description For Embed.
     */
    public setDescription(description: string): this {
        this.description = description;
        return this;
    }
    /**
     * @param imageUrl Url of the image, this can also be a file name
     * @param obj Extra Options For Embed
     * ```js
     * const Fuwa = require('fuwa.js');
     *
     * // Image with filename
     * const embed = new Fuwa.Embed()
     * embed.setImage('foo.bar.png');
     *
     * // Image with URL
     * embed.setImage('https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg')
     * ```
     */
    public setImage(imageUrl: string, opts?: { proxyUrl?: string; height?: number; width?: number }): this {
        // if (!imageUrl.includes('http://') || !imageUrl.includes('https://')) {
        //     let ext = path.extname(imageUrl).replace('.', '');
        //     if (ext === 'svg') ext = 'svg+xml';
        //     const base64 = fs.readFileSync(imageUrl).toString('base64');
        //     imageUrl = `data:image/${ext};base64,${base64}`;
        // }
        this.image = {
            url: imageUrl,
            proxy_url: opts?.proxyUrl,
            height: opts?.height,
            width: opts?.width,
        };
        return this;
    }

    /**
     * @param title title for image embed
     * ```js
     * embed.setTitle('some title');
     * ```
     */
    public setTitle(title: string): this {
        this.title = title;
        return this;
    }

    /**
     * @param footerText text to be displayed in footer of embed
     * @param extraOpts extra options for footer
     * ```js
     * //without options
     * embed.setFooter('some value')
     *
     * //with options
     * embed.setFooter('some value', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    public setFooter(footerText: string, opts?: { icon?: string; proxyIconUrl?: string } | undefined): this {
        this.footer = {
            text: footerText,
            icon_url: opts?.icon,
            proxy_icon_url: opts?.proxyIconUrl,
        };
        return this;
    }

    /**
     * @param name author name that should be displayed in embed
     * @param opts Extra options for author
     * ```js
     * // without options
     * embed.setAuthor({ name: 'Some Name' })
     *
     * // with options
     * embed.setAuthor({ name: 'Some Name', url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    public setAuthor({ name, url, icon, proxyIcon }: AuthorOpts): this {
        this.author = {
            name,
            url,
            icon_url: icon,
            proxy_icon_url: proxyIcon,
        };
        return this;
    }

    /**
     * @param url Url for thumbnail in embed
     * @param opts Extra options for thumbnail.
     * ```js
     * //without options
     * embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg')
     *
     * //with options
     * embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg', { height: 100, width:100 })
     * ```
     */
    public setThumbnail(url: string, opts?: { proxyUrl?: string; height?: number; width?: number }): this {
        this.thumbnail = {
            url: url,
            proxy_url: opts?.proxyUrl,
            height: opts?.height,
            width: opts?.width,
        };
        return this;
    }

    /**
     * @param color The hex color code for the embed
     * ```ts
     * embed.setColor('#6f00ff')
     * embed.setColor(0x6f00f)
     * ```
     */
    public setColor(color: string | number): this {
        if (typeof color === 'string') {
            this.color = parseInt('0x' + color.replace('#', ''));
            if (isNaN(this.color)) this.color = 0xffffff;
            return this;
        } else if (typeof color === 'number') {
            this.color = color;
        } else {
            // 'throw' would crash the bot for such a minor issue
            console.trace(`Expected a string or number instead found ${typeof color}`);
        }

        return this;
    }

    /**
     * @param time The timestamp of the embed.
     * ```js
     * embed.setTimestamp()
     * ```
     */
    public setTimestamp(time?: string | Date | number): this {
        this.timestamp = new Date(time);
        return this;
    }

    /**
     * @param url url of embed
     * ```ts
     *
     * embed.setUrl('https://discord.com')
     * ````
     */
    public setUrl(url: string): this {
        this.url = url;
        return this;
    }
    /**
     * @param fields fields For embed
     * ```ts
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    public addFields(fields: { name: string; value: string; inline?: boolean }[]): this {
        this.fields.push(...fields);
        return this;
    }
    /**
     * @param field A field for embed
     */
    public addField(field: { name: string; value: string; inline?: boolean }): this {
        this.fields.push(field);
        return this;
    }

    /**
     * @param name name of provider if exists
     * @param obj extra options for provider
     * ```ts
     * embed.setProvider('some name')
     * ```
     */
    public setProvider(name: string, url?: string): this {
        this.provider = { name, url };
        return this;
    }

    /**
     * @param url url for video in embed
     * @param opts extra options
     * ```js
     *
     * embed.setVideo('https://tinyurl.com/icehacks')
     * ```
     */
    public setVideo(url: string, opts?: { height?: number; width?: number; proxyUrl?: string }): this {
        this.video = {
            url,
            height: opts.height,
            width: opts.width,
            proxy_url: opts.proxyUrl,
        };
        return this;
    }
}
