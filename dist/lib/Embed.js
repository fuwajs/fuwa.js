"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Embed = /** @class */ (function () {
    function Embed(data) {
        var _this = this;
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
                ? data.fields.map(function (c) {
                    return _this.fields.push({
                        name: c.name,
                        value: c.value,
                        inline: c.inline ? true : false,
                    });
                })
                : null;
        }
    }
    /**
     * @param {string} description  Description For Embed
     */
    Embed.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
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
    Embed.prototype.setImage = function (imageUrl, obj) {
        if (!imageUrl.includes('http://') || !imageUrl.includes('https://')) {
            var ext = path_1.default.extname(imageUrl).replace('.', '');
            ext === 'svg' ? (ext = 'svg+xml') : 0;
            var base64 = fs_1.default.readFileSync(imageUrl).toString('base64');
            imageUrl = "data:image/" + ext + ";base64," + base64;
        }
        this.image = {
            url: imageUrl,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
        };
        return this;
    };
    /**
     * @param {string} title title for image embed
     * @example
     *
     * embed.setTitle("some title")
     */
    Embed.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
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
    Embed.prototype.setFooter = function (footertext, obj) {
        this.footer = {
            text: footertext,
            icon_url: obj && obj.url ? obj.url : null,
            proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null,
        };
        return this;
    };
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
    Embed.prototype.setAuthor = function (name, obj) {
        this.author = {
            name: name,
            url: obj && obj.url ? obj.url : null,
            proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null,
        };
        return this;
    };
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
    Embed.prototype.setThumbnail = function (url, obj) {
        this.thumbnail = {
            url: url,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
        };
        return this;
    };
    /**
     * @param {string}  code  color hex code for embed
     * @example
     *
     * embed.setColor("#6f00ff")
     */
    Embed.prototype.setColor = function (code) {
        this.color = code;
        return this;
    };
    /**
     * @param {Date} time timestamp for embed
     * @example
     *
     * embed.setTimestamp()
     */
    Embed.prototype.setTimestamp = function (time) {
        this.timestamp = new Date(time || Date.now());
        return this;
    };
    /**
     * @param {string} url url of embed
     * @example
     *
     * embed.setUrl("https://www.fuwaorg.com")
     */
    Embed.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
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
    Embed.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    /**
     * @param {Object[]} fields fields For  embed
     * @example
     *
     * embed.addFields([{name: "some name", value: "some value"}])
     */
    Embed.prototype.addFields = function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        this.fields = __spreadArrays(fields);
        return this;
    };
    /**
     *
     * @param {Object} field A field for embed
     */
    Embed.prototype.addField = function (field) {
        this.fields ? this.fields.push(field) : (this.fields = [field]);
        return this;
    };
    /**
     * @param {string} name name of provider if exists
     * @param {{url: string}} obj extra options for provider
     * @example
     *
     * embed.setProvider("some name")
     */
    Embed.prototype.setProvider = function (name, obj) {
        this.provider = { name: name, url: obj && obj.url ? obj.url : null };
        return this;
    };
    /**
     * @param {string} url url for video in embed
     * @param {{height: number; width: number; proxy_url: string}} obj extra options
     * @example
     *
     * embed.setVideo("https://www.dropbox.com/s/df2d2gf1dvnr5uj.mp4")
     */
    Embed.prototype.setVideo = function (url, obj) {
        this.video = {
            url: url,
            height: obj && obj.height ? obj.height : null,
            width: obj && obj.width ? obj.width : null,
            proxy_url: obj && obj.proxy_url ? obj.proxy_url : null,
        };
        return this;
    };
    return Embed;
}());
exports.default = Embed;
