/**
 * Embed Options
 * @interface
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
     * @param {string} description  Description For Embed
     */
    setDescription(description: string): this;
    /**
     * @param {string} imageUrl Url of the image , this can also be a file name
     * @param  {{ proxy_url?: string, height?: number, width?: number }} obj Extra Options For Embed
     * @example
     *
     * const Fuwa = require('fuwa.js');
     *
     * // Image with filename
     * const embed = new Fuwa.Embed()
     * embed.setImage('foo.bar.png');
     *
     * // Image with URL
     * embed.setImage('https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg's)
     *
     */
    setImage(imageUrl: string, obj?: {
        proxy_url?: string;
        height?: number;
        width?: number;
    }): this;
    /**
     * @param {string} title title for image embed
     * @example
     *
     * embed.setTitle("some title")
     */
    setTitle(title: string): this;
    /**
     * @param {string} footertext text to be displayed in footer of embed
     * @param {{url?: string; proxy_icon_url?: string}} obj extra options for footer
     * @example
     *
     * //without options
     * embed.setFooter("some value")
     *
     * //with options
     * embed.setFooter("some value", {url: "https://cdn.discordapp.com/attachments/792884815631351869/.jpg"})
     */
    setFooter(footertext: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    /**
     * @param {string} name author name that should be displayed in embed
     * @param {{ url?: string, proxy_icon_url?: string }} obj extra options for author
     * @example
     *
     * //without options
     * embed.setAuthor("Some Name")
     *
     * //with options
     * embed.setAuthor("Some Name", {url: "https://cdn.discordapp.com/attachments/792884815631351869/.jpg"})
     */
    setAuthor(name: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    /**
     * @param {string} url url for thumbnail in embed
     * @param {{ proxy_url: string; height: number; width: number }} obj extra options for thumbnail
     * @example
     *
     * //without options
     * embed.setThumbnail("https://cdn.discordapp.com/attachments/792884815631351869/.jpg")
     *
     * //with options
     * embed.setThumbnail("https://cdn.discordapp.com/attachments/792884815631351869/.jpg", {height: 100, width:100 ,})
     */
    setThumbnail(url: string, obj?: {
        proxy_url?: string;
        height?: number;
        width?: number;
    }): this;
    /**
     * @param {string}  code  color hex code for embed
     * @example
     *
     * embed.setColor("#6f00ff")
     */
    setColor(code: string): this;
    /**
     * @param {Date} time timestamp for embed
     * @example
     *
     * embed.setTimestamp()
     */
    setTimestamp(time?: Date | number): this;
    /**
     * @param {string} url url of embed
     * @example
     *
     * embed.setUrl("https://www.fuwaorg.com")
     */
    setUrl(url: string): this;
    /**
     * @param {string} type type of embed
     * available types are
     * rich: the default type
     * image: type image
     * video: type video
     * gif: type gif
     * article: type article
     * link: type link
     * @example
     *
     * embed.setType("rich")
     */
    setType(type: 'rich' | 'image' | 'video' | 'gif' | 'article' | 'link'): this;
    /**
     * @param {Object[]} fields fields For  embed
     * @example
     *
     * embed.addFields([{name: "some name", value: "some value"}])
     */
    addFields(...fields: Object[]): this;
    /**
     *
     * @param {Object} field A field for embed
     */
    addField(field: Object): this;
    /**
     * @param {string} name name of provider if exists
     * @param {{url: string}} obj extra options for provider
     * @example
     *
     * embed.setProvider("some name")
     */
    setProvider(name: string, obj?: {
        url: string;
    }): this;
    /**
     * @param {string} url url for video in embed
     * @param {{height: number; width: number; proxy_url: string}} obj extra options
     * @example
     *
     * embed.setVideo("https://www.dropbox.com/s/df2d2gf1dvnr5uj.mp4")
     */
    setVideo(url: string, obj?: {
        height: number;
        width: number;
        proxy_url: string;
    }): this;
}
export default Embed;
