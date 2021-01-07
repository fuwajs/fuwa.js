"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Embed {
    constructor(data) {
        this.type = 'rich';
        this.title = null;
        this.description = null;
        this.url = null;
        this.timestamp = null;
        this.color = null;
        this.footer = null;
        this.image = null;
        this.thumbnail = null;
        this.video = null;
        this.provider = null;
        this.author = null;
        this.fields = null;
        if (data) {
            this.type = data.type || 'rich';
            this.title = data.title ? data.title : null;
            this.description = data.description ? data.description : null;
            this.url = data.url ? data.url : null;
            this.timestamp = data.timestamp ? data.timestamp : null;
            this.color = data.color ? data.color : null;
            this.footer = data.footer
                ? {
                    text: data.footer.text,
                    icon_url: data.footer.url ? data.footer.url : null,
                    proxy_icon_url: data.footer.proxy_icon_url
                        ? data.footer.proxy_icon_url
                        : null,
                }
                : null;
            this.image = data.image
                ? {
                    url: data.image.url,
                    height: data.image.height ? data.image.height : null,
                    width: data.image.width ? data.image.width : null,
                    proxy_url: data.image.proxy_url
                        ? data.image.proxy_url
                        : null,
                }
                : null;
            this.thumbnail = data.thumbnail
                ? {
                    url: data.thumbnail.url,
                    height: data.thumbnail.height
                        ? data.thumbnail.height
                        : null,
                    width: data.thumbnail.width ? data.thumbnail.width : null,
                    proxy_url: data.thumbnail.proxy_url
                        ? data.thumbnail.proxy_url
                        : null,
                }
                : null;
            this.video = data.video
                ? {
                    url: data.video.url,
                    height: data.video.height ? data.video.height : null,
                    width: data.video.width ? data.video.width : null,
                    proxy_url: data.video.proxy_url
                        ? data.video.proxy_url
                        : null,
                }
                : null;
            this.author = data.author
                ? {
                    name: data.author.name ? data.author.name : null,
                    url: data.author.url ? data.author.url : null,
                    proxy_icon_url: data.author.proxy_icon_url
                        ? data.author.proxy_icon_url
                        : null,
                }
                : null;
            this.provider = data.provider
                ? {
                    url: data.provider.url ? data.provider.url : null,
                    name: data.provider.name ? data.provider.name : null,
                }
                : null;
            this.fields = data.fields
                ? data.fields.map((c) => this.fields.push({
                    name: c.name,
                    value: c.value,
                    inline: c.inline ? true : false,
                }))
                : null;
        }
    }
    /**
     * @param description  Description For Embed
     */
    setDescription(description) {
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
    setImage(imageUrl, obj) {
        if (!imageUrl.includes('http://') || !imageUrl.includes('https://')) {
            let ext = path_1.default.extname(imageUrl).replace('.', '');
            ext === 'svg' ? (ext = 'svg+xml') : 0;
            const base64 = fs_1.default.readFileSync(imageUrl).toString('base64');
            imageUrl = `data:image/${ext};base64,${base64}`;
        }
        this.image = {
            url: imageUrl,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
        };
        return this;
    }
    /**
     * @param title title for image embed
     * ```js
     * embed.setTitle('some title');
     * ```
     */
    setTitle(title) {
        this.title = title;
        return this;
    }
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
    setFooter(footertext, obj) {
        this.footer = {
            text: footertext,
            icon_url: obj && obj.url ? obj.url : null,
            proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null,
        };
        return this;
    }
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
    setAuthor(name, obj) {
        this.author = {
            name: name,
            url: obj && obj.url ? obj.url : null,
            proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null,
        };
        return this;
    }
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
    setThumbnail(url, obj) {
        this.thumbnail = {
            url: url,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
        };
        return this;
    }
    /**
     * @param code  color hex code for embed
     * ```ts
     *
     * embed.setColor('#6f00ff')
     * ```
     */
    setColor(code) {
        this.color = code;
        return this;
    }
    /**
     * @param time timestamp for embed
     * ```js
     *
     * embed.setTimestamp()
     * ```
     */
    setTimestamp(time) {
        this.timestamp = new Date(time || Date.now());
        return this;
    }
    /**
     * @param url url of embed
     * ```ts
     *
     * embed.setUrl('https://discord.com')
     * ````
     */
    setUrl(url) {
        this.url = url;
        return this;
    }
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
    setType(type) {
        this.type = type;
        return this;
    }
    /**
     * @param fields fields For  embed
     * ```js
     *
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    addFields(...fields) {
        this.fields = [...fields];
        return this;
    }
    /**
     *
     * @param field A field for embed
     */
    addField(field) {
        this.fields ? this.fields.push(field) : (this.fields = [field]);
        return this;
    }
    /**
     * @param name name of provider if exists
     * @param obj extra options for provider
     * ```js
     *
     * embed.setProvider('some name')
     * ```
     */
    setProvider(name, obj) {
        this.provider = { name: name, url: obj && obj.url ? obj.url : null };
        return this;
    }
    /**
     * @param url url for video in embed
     * @param obj extra options
     * ```js
     *
     * embed.setVideo('https://tinyurl.com/icehacks')
     * ```
     */
    setVideo(url, obj) {
        this.video = {
            url: url,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
        };
        return this;
    }
}
exports.default = Embed;
