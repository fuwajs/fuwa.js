declare type Media = {
    url: string;
    proxy_url: string;
    height: number;
    width: number;
};
declare type EmbedType = 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';
declare class Embed {
    protected type: EmbedType;
    protected title?: string;
    protected description?: string;
    protected url?: string;
    protected timestamp?: Date;
    protected color?: number;
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
    protected fields?: {
        name: string;
        value: string;
        inline?: boolean;
    }[];
    constructor(opts?: Embed);
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
    setImage(imageUrl: string, opts?: {
        proxyUrl?: string;
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
     * @param extraOpts extra options for footer
     * ```js
     * //without options
     * embed.setFooter('some value')
     *
     * //with options
     * embed.setFooter('some value', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setFooter(footerText: string, opts?: {
        icon?: string;
        proxyIconUrl?: string;
    } | undefined): this;
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
    setAuthor(name: string, opts?: {
        icon: string;
        url?: string;
        proxyIconUrl?: string;
    }): this;
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
    setThumbnail(url: string, opts?: {
        proxyUrl?: string;
        height?: number;
        width?: number;
    }): this;
    /**
     * @param color The hex color code for the embed
     * ```ts
     * embed.setColor('#6f00ff')
     * embed.setColor(0x6f00f)
     * ```
     */
    setColor(color: string | number): this;
    /**
     * @param time The timestamp of the embed.
     * ```js
     * embed.setTimestamp()
     * ```
     */
    setTimestamp(time?: string | Date | number): this;
    /**
     * @param url url of embed
     * ```ts
     *
     * embed.setUrl('https://discord.com')
     * ````
     */
    setUrl(url: string): this;
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
    setType(type: EmbedType): this;
    /**
     * @param fields fields For embed
     * ```ts
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    addFields(fields: {
        name: string;
        value: string;
        inline?: boolean;
    }[]): this;
    /**
     * @param field A field for embed
     */
    addField(field: {
        name: string;
        value: string;
        inline?: boolean;
    }): this;
    /**
     * @param name name of provider if exists
     * @param obj extra options for provider
     * ```ts
     * embed.setProvider('some name')
     * ```
     */
    setProvider(name: string, opts?: {
        url?: string;
    }): this;
    /**
     * @param url url for video in embed
     * @param opts extra options
     * ```js
     *
     * embed.setVideo('https://tinyurl.com/icehacks')
     * ```
     */
    setVideo(url: string, opts?: {
        height?: number;
        width?: number;
        proxyUrl?: string;
    }): this;
}
export default Embed;
