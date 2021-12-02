import { Blob } from 'buffer';

export class File {
    contentType: string;
    constructor(public name: string, public data: Blob, contentType?: string) {
        this.contentType = data.type;
        if (contentType) this.contentType = contentType;
        if (!this.contentType) {
            throw new Error('Content type is required');
        }
    }
    static bufferToBlob(buf: Buffer, contentType?: string): Blob {
        const arr = new Uint16Array(buf.buffer, buf.byteOffset, buf.length / Uint16Array.BYTES_PER_ELEMENT);
        return new Blob([arr], { type: contentType });
    }
    static async blobToBuffer(blob: Blob): Promise<Buffer> {
        return Buffer.from(await blob.arrayBuffer());
    }
}
