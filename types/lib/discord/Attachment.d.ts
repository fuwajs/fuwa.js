import { Attachment as IAttachment } from '../../interfaces/message';
export default class Attachment implements IAttachment {
    id: string;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;
    constructor();
}
//# sourceMappingURL=Attachment.d.ts.map