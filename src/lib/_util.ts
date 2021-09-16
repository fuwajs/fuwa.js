import { InvalidMessageContent } from './Errors';
import { discordCDN, Message as IMessage } from './_DiscordAPI';
import { Emoji } from './_DiscordAPI';
import Embed from './discord/Embed';
import http from './_http';

export function getAvatarUrl(props: {
    uid: string;
    avatar: string;
    isBanner?: boolean;
}): string {
    let url = `${discordCDN}/${
        props.isBanner ?? false ? 'banners' : 'avatars'
    }/${props.uid}/`;
    // means its a gif
    if (props.avatar.startsWith('a_')) {
        url += `${props.avatar}.gif`;
    } else {
        url += `${props.avatar}.png`;
    }
    return url;
}
export async function sendMSG(
    content: string | Embed,
    cid: string,
    reply: boolean | string = false,
    options?: any
): Promise<IMessage> {
    let data: any = {};
    if (reply) {
        data.message_reference = reply;
    }
    if (typeof content === 'string') {
        // Just a normal message
        data.content = content;
        data.tts = false;
    } else if ((content as any) instanceof Embed) {
        data.embeds = [content];
        data.tts = false;
    } else {
        throw new InvalidMessageContent(
            `type ${typeof content} is not a valid content type`
        );
    }
    data = { ...data, ...options };

    const res = await http.POST(
        `/channels/${cid}/messages`,
        JSON.stringify(data)
    );

    return res;
}

export function reactMSG(
    emojis: string | string[] | Emoji | Emoji[],
    cid: string,
    mid: string,
    inOrder?: boolean
) {
    const react = async (emoji: string | Emoji) => {
        const string =
            typeof emoji === 'string'
                ? encodeURI(emoji)
                : `${emoji.name}:${emoji.id}`;

        await http.PUT(
            `/channels/${cid}/messages/${mid}/reactions/${string}/@me`
        );
    };

    if (Array.isArray(emojis)) {
        emojis.forEach((emoji) => {
            react(emoji);
        });
    } else {
        react(emojis);
    }
}
