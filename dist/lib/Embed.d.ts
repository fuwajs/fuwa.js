/**
 * Embed Options
 */
export interface EmbedOptions {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: string | number;
    footer?: {
        text: string;
        url: string;
        proxy_icon_url: string;
    };
    image?: {
        url: string;
        proxy_url: string;
        height: number;
        width: number;
    };
    thumbnail?: {
        url: string;
        proxy_url: string;
        height: number;
        width: number;
    };
    video?: {
        url: string;
        proxy_url: string;
        height: number;
        width: number;
    };
    provider?: {
        url: string;
        name: string;
    };
    author?: {
        proxy_icon_url: string;
        url: string;
        name: string;
    };
    fields?: {
        name: string;
        value: string;
        inline: boolean;
    }[];
}
declare class Embed {
    protected type: string | null;
    protected title: string | null;
    protected description: string | null;
    protected url: string | null;
    protected timestamp: Date | null;
    protected color: string | number | null;
    protected footer: {
        text: string;
        icon_url: string | null;
        proxy_icon_url: string | null;
    } | null;
    protected image: {
        url: string;
        proxy_url: string | null;
        height: number | null;
        width: number | null;
    } | null;
    protected thumbnail: {
        url: string;
        proxy_url: string | null;
        height: number | null;
        width: number | null;
    } | null;
    protected video: {
        url: string;
        proxy_url: string | null;
        height: number | null;
        width: number | null;
    } | null;
    protected provider: {
        url: string | null;
        name: string | null;
    } | null;
    protected author: {
        proxy_icon_url: string | null;
        url: string | null;
        name: string | null;
    } | null;
    protected fields: Object[] | null;
    constructor(data?: EmbedOptions);
    /**
     * @param description  Description For Embed
     */
    setDescription(description: string): this;
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
    setImage(imageUrl: string, obj?: {
        proxy_url?: string;
        height?: number;
        width?: number;
    }): this;
    /**
     * @param title title for image embed
     * ```js
     * embed.setTitle('some title');
     * ```
     */
    setTitle(title: string): this;
    /**
     * @param footertext text to be displayed in footer of embed
     * @param obj extra options for footer
     * ```js
     * //without options
     * embed.setFooter('some value')
     *
     * //with options
     * embed.setFooter('some value', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setFooter(footertext: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    /**
     * @param name author name that should be displayed in embed
     * @param obj extra options for author
     * ```js
     * // without options
     * embed.setAuthor('Some Name')
     *
     * // with options
     * embed.setAuthor('Some Name', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setAuthor(name: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    /**
     * @param url url for thumbnail in embed
     * @param obj extra options for thumbnail
     * ```js
     *
     * //without options
     * embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg')
     *
     * //with options
     * embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg', {height: 100, width:100 ,})
     * ```
     */
    setThumbnail(url: string, obj?: {
        proxy_url?: string;
        height?: number;
        width?: number;
    }): this;
    /**
     * @param code  color hex code for embed
     * ```ts
     *
     * embed.setColor('#6f00ff')
     * ```
     */
    setColor(code: string): this;
    /**
     * @param time timestamp for embed
     * ```js
     *
     * embed.setTimestamp()
     * ```
     */
    setTimestamp(time?: Date | number): this;
    /**
     * @param url url of embed
     * ```ts
     *
     * embed.setUrl('https://discord.com')
     * ````
     */
    setUrl(url: string): this;
    /**
     * @param type type of embed
     * available types are
     * rich: the default type
     * image: type image
     * video: type video
     * gif: type gif
     * article: type article
     * link: type link
     * ```js
     * embed.setType('rich')
     * ```
     */
    setType(type: 'rich' | 'image' | 'video' | 'gif' | 'article' | 'link'): this;
    /**
     * @param fields fields For  embed
     * ```js
     *
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    addFields(...fields: Object[]): this;
    /**
     *
     * @param field A field for embed
     */
    addField(field: Object): this;
    /**
     * @param name name of provider if exists
     * @param obj extra options for provider
     * ```js
     *
     * embed.setProvider('some name')
     * ```
     */
    setProvider(name: string, obj?: {
        url: string;
    }): this;
    /**
     * @param url url for video in embed
     * @param obj extra options
     * ```js
     *
     * embed.setVideo('https://tinyurl.com/icehacks')
     * ```
     */
    setVideo(url: string, obj?: {
        height: number;
        width: number;
        proxy_url: string;
    }): this;
}
export default Embed;
