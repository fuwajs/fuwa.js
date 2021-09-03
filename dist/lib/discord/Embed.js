"use strict";
/******************************************************************************
 * @file src/lib/discord/Embed.ts
 * @fileoverview Exports a class implementation of the Embed Interface
 * (IEmbed)
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
class Embed {
    constructor(opts) {
        // Rich Embed by default
        this.fields = [];
        if (opts) {
            // Don't override the defualt unless specified
            Object.assign(this, Object.assign({ type: 'rich', timestamp: new Date(opts.timestamp) }, opts));
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
    setImage(imageUrl, opts) {
        // if (!imageUrl.includes('http://') || !imageUrl.includes('https://')) {
        //     let ext = path.extname(imageUrl).replace('.', '');
        //     if (ext === 'svg') ext = 'svg+xml';
        //     const base64 = fs.readFileSync(imageUrl).toString('base64');
        //     imageUrl = `data:image/${ext};base64,${base64}`;
        // }
        this.image = {
            url: imageUrl,
            proxy_url: opts === null || opts === void 0 ? void 0 : opts.proxyUrl,
            height: opts === null || opts === void 0 ? void 0 : opts.height,
            width: opts === null || opts === void 0 ? void 0 : opts.width,
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
     * @param extraOpts extra options for footer
     * ```js
     * //without options
     * embed.setFooter('some value')
     *
     * //with options
     * embed.setFooter('some value', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' })
     * ```
     */
    setFooter(footerText, opts) {
        this.footer = {
            text: footerText,
            icon_url: opts === null || opts === void 0 ? void 0 : opts.icon,
            proxy_icon_url: opts === null || opts === void 0 ? void 0 : opts.proxyIconUrl,
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
    setAuthor(name, opts) {
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
    setThumbnail(url, opts) {
        this.thumbnail = {
            url: url,
            proxy_url: opts === null || opts === void 0 ? void 0 : opts.proxyUrl,
            height: opts === null || opts === void 0 ? void 0 : opts.height,
            width: opts === null || opts === void 0 ? void 0 : opts.width,
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
    setColor(color) {
        if (typeof color === 'string') {
            this.color = parseInt('0x' + color.replace('#', ''));
            if (isNaN(this.color))
                this.color = 0xffffff;
            return this;
        }
        else if (typeof color === 'number') {
            this.color = color;
        }
        else {
            console.trace(`Expected a string or number instead found ${typeof color}`);
            // 'throw' would crash the bot for such a minor issue
        }
        return this;
    }
    /**
     * @param time The timestamp of the embed.
     * ```js
     * embed.setTimestamp()
     * ```
     */
    setTimestamp(time) {
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
    setUrl(url) {
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
    setType(type) {
        this.type = type;
        return this;
    }
    /**
     * @param fields fields For embed
     * ```ts
     * embed.addFields([{ name: 'some name', value: 'some value' }])
     * ```
     */
    addFields(fields) {
        this.fields.push(...fields);
        return this;
    }
    /**
     * @param field A field for embed
     */
    addField(field) {
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
    setProvider(name, opts) {
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
    setVideo(url, opts) {
        this.video = {
            url: url,
            height: opts.height,
            width: opts.width,
            proxy_url: opts.proxyUrl,
        };
        return this;
    }
}
exports.default = Embed;
