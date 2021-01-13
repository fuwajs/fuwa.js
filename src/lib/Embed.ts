import path from 'path';
import fs from 'fs';
import { Embed as _Embed } from './_DiscordAPI';
type Media = {
    url: string;
    proxy_url: string;
    height: number;
    width: number;
}


type EmbedType = 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';

class Embed {
    protected type: EmbedType;
    protected title?: string;
    protected description?: string;
    protected url?: string;
    protected timestamp?: Date;
    color?: string | number;
    protected footer?: {
        text: string;
        icon_url: string;
        proxy_icon_url: string;
    };
    protected image?: Media;
    protected thumbnail?: Media;
    protected video?: Media;
    protected provider?: {
        url: string;
        name: string;
    };
    protected author?: {
        proxy_icon_url: string;
        icon_url: string;
        url: string;
        name: string;
    };
    protected fields?: { name: string; value: string; inline?: boolean }[] = [];
    constructor(opts?: Embed) {
        // Rich Embed by default

        this.type = 'rich';
        if (opts) {
            // Don't override the defualt unless specified
            this.type = opts.type || 'rich';
            this.title = opts.title;
            this.description = opts.description;
            this.url = opts.url;
            this.timestamp = opts.timestamp;
            this.color = opts.color;
            this.footer = opts.footer;
            this.image = opts.image;
            this.thumbnail = opts.thumbnail;
            this.video = opts.video;
            this.provider = opts.provider;
            this.author = opts.author;
            this.fields = opts.fields;
        }
    }

    /**
     * @param description  Description For Embed
     */
    setDescription(description: string): this {
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
    setImage(
        imageUrl: string,
        opts?: { proxyUrl?: string; height?: number; width?: number }
    ): this {
        if (!imageUrl.includes('http://') || !imageUrl.includes('https://')) {
            let ext = path.extname(imageUrl).replace('.', '');
            if (ext === 'svg') ext = 'svg+xml';
            const base64 = fs.readFileSync(imageUrl).toString('base64');
            imageUrl = `data:image/${ext};base64,${base64}`;
        }
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
    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    /**
     * @param footertext text to be displayed in footer of embed
     * @param extraOpts extra options for footer
     * ```js
     * //without options
     * embed.setFooter('some value')
     *
     * //with options
     * embed.setFooter('some value', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setFooter(footerText: string, opts?: { icon?: string, proxyIconUrl?: string } | undefined): this {
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
     * embed.setAuthor('Some Name')
     *
     * // with options
     * embed.setAuthor('Some Name', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setAuthor(name: string, opts?: { icon: string, url?: string; proxyIconUrl?: string }): this {
        this.author = {
            name: name,
            url: opts.url,
            icon_url: opts.icon,
            proxy_icon_url: opts.proxyIconUrl,
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
    setThumbnail(
        url: string,
        opts?: { proxyUrl?: string; height?: number; width?: number }
    ): this {
        this.thumbnail = {
            url: url,
            proxy_url: opts?.proxyUrl,
            height: opts?.height,
            width: opts?.width,
        };
        return this;
    }

    /**
     * @param code  color hex code for embed
     * ```ts
     * embed.setColor('#6f00ff')
     * embed.setColor(0x6f00f)
     * ```
     */
    setColor(code: string | number): this {
        this.color = code;
        return this;
    }

    /**
     * @param time timestamp for embed
     * ```js
     * embed.setTimestamp()
     * ```
     */
    setTimestamp(time?: string | Date | number): this {
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
    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    /**
     * @param type The type of embed:
     * - rich: The default
     * - image
     * - video
     * - gif
     * - article
     * - link
     * ```ts
     * embed.setType('rich')
     * ```
     */
    setType(type: EmbedType): this {
        this.type = type;
        return this;
    }

    /**
     * @param fields fields For embed
     * ```ts
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    addFields(fields: { name: string; value: string; inline?: boolean; }[]): this {
        this.fields.push(...fields);
        return this;
    }
    /**
     * @param field A field for embed
     */
    addField(field: { name: string; value: string; inline?: boolean; }): this {
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
    setProvider(name: string, opts?: { url?: string }): this {
        this.provider = { name: name, url: opts.url };
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
    setVideo(
        url: string,
        opts?: { height?: number; width?: number; proxyUrl?: string }
    ): this {
        this.video = {
            url: url,
            height: opts.height,
            width: opts.width,
            proxy_url: opts.proxyUrl,
        };
        return this;
    }
}

export default Embed;