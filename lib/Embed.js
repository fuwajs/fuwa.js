"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Embed = /** @class */ (function () {
    function Embed(data) {
        var _this = this;
        this.type = "rich";
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
            this.type = data.type || "rich";
            this.title = data.title ? data.title : null;
            this.description = data.description ? data.description : null;
            this.url = data.url ? data.url : null;
            this.timestamp = data.timestamp ? data.timestamp : null;
            this.color = data.color ? data.color : null;
            this.footer = data.footer ? { text: data.footer.text, icon_url: data.footer.url ? data.footer.url : null, proxy_icon_url: data.footer.proxy_icon_url ? data.footer.proxy_icon_url : null } : null;
            this.image = data.image ? { url: data.image.url, height: data.image.height ? data.image.height : null, width: data.image.width ? data.image.width : null, proxy_url: data.image.proxy_url ? data.image.proxy_url : null } : null;
            this.thumbnail = data.thumbnail ? { url: data.thumbnail.url, height: data.thumbnail.height ? data.thumbnail.height : null, width: data.thumbnail.width ? data.thumbnail.width : null, proxy_url: data.thumbnail.proxy_url ? data.thumbnail.proxy_url : null } : null;
            this.video = data.video ? { url: data.video.url, height: data.video.height ? data.video.height : null, width: data.video.width ? data.video.width : null, proxy_url: data.video.proxy_url ? data.video.proxy_url : null } : null;
            this.author = data.author ? { name: data.author.name ? data.author.name : null, url: data.author.url ? data.author.url : null, proxy_icon_url: data.author.proxy_icon_url ? data.author.proxy_icon_url : null } : null;
            this.provider = data.provider ? { url: data.provider.url ? data.provider.url : null, name: data.provider.name ? data.provider.name : null } : null;
            this.fields = data.fields ? data.fields.map(function (c) { return _this.fields.push({ name: c.name, value: c.value, inline: c.inline ? true : false }); }) : null;
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
     * @param {string} imageUrl Url Of Image In Embed
     * @param  {proxy_url : string  , height : number , width : number } obj Extra Options For Embed
     */
    Embed.prototype.setImage = function (imageUrl, obj) {
        this.image = { url: imageUrl, proxy_url: obj && obj.proxy_url ? obj.proxy_url : null, height: obj && obj.height ? obj.height : null, width: obj && obj.width ? obj.width : null };
        return this;
    };
    Embed.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    Embed.prototype.setFooter = function (footertext, obj) {
        this.footer = { text: footertext, icon_url: obj && obj.url ? obj.url : null, proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null };
        return this;
    };
    Embed.prototype.setAuthor = function (name, obj) {
        this.author = { name: name, url: obj && obj.url ? obj.url : null, proxy_icon_url: obj && obj.proxy_icon_url ? obj.proxy_icon_url : null };
        return this;
    };
    Embed.prototype.setThumbnail = function (url, obj) {
        this.thumbnail = { url: url, proxy_url: obj && obj.proxy_url ? obj.proxy_url : null, height: obj && obj.height ? obj.height : null, width: obj && obj.width ? obj.width : null };
        return this;
    };
    Embed.prototype.setColor = function (code) {
        this.color = code;
        return this;
    };
    Embed.prototype.setTimestamp = function () {
        this.timestamp = new Date();
        return this;
    };
    Embed.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    Embed.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Embed.prototype.addFields = function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        this.fields = __spreadArrays(fields);
        return this;
    };
    Embed.prototype.setProvider = function (name, obj) {
        this.provider = { name: name, url: obj && obj.url ? obj.url : null };
        return this;
    };
    Embed.prototype.setVideo = function (url, obj) {
        this.video = { url: url, height: obj && obj.height ? obj.height : null, width: obj && obj.width ? obj.width : null, proxy_url: obj && obj.proxy_url ? obj.proxy_url : null };
        return this;
    };
    return Embed;
}());
exports.default = Embed;
