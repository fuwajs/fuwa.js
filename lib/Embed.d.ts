/**
 * Embed Options
 * @interface
 */
export interface embed {
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
        height: Number;
        width: Number;
    };
    thumbnail?: {
        url: string;
        proxy_url: string;
        height: Number;
        width: Number;
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
    protected color: string | Number | null;
    protected footer: {
        text: string;
        icon_url: string | null;
        proxy_icon_url: string | null;
    } | null;
    protected image: {
        url: string;
        proxy_url: string | null;
        height: Number | null;
        width: Number | null;
    } | null;
    protected thumbnail: {
        url: string;
        proxy_url: string | null;
        height: Number | null;
        width: Number | null;
    } | null;
    protected video: {
        url: string;
        proxy_url: string | null;
        height: Number | null;
        width: Number | null;
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
    constructor(data?: embed);
    /**
     * @param {string} description  Description For Embed
     */
    setDescription(description: string): this;
    /**
     * @param {string} imageUrl Url Of Image In Embed
     * @param  {proxy_url : string  , height : number , width : number } obj Extra Options For Embed
     */
    setImage(imageUrl: string, obj?: {
        proxy_url?: string;
        height?: number;
        width?: number;
    }): this;
    setTitle(title: string): this;
    setFooter(footertext: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    setAuthor(name: string, obj?: {
        url?: string;
        proxy_icon_url?: string;
    }): this;
    setThumbnail(url: string, obj?: {
        proxy_url: string;
        height: number;
        width: number;
    }): this;
    setColor(code: string): this;
    setTimestamp(): this;
    setUrl(url: string): this;
    setType(type: "rich" | "image" | "video" | "gifv" | "article" | "link"): this;
    addFields(...fields: Object[]): this;
    setProvider(name: string, obj?: {
        url: string;
    }): this;
    setVideo(url: string, obj?: {
        height: number;
        width: number;
        proxy_url: string;
    }): this;
}
export default Embed;
