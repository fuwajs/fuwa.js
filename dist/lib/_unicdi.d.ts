declare const _default: {
    GET(path: string, token: string): Promise<unknown>;
    DELETE(path: string, token: string): Promise<unknown>;
    OTHER(method: string, path: string, token: string, data: any): Promise<unknown>;
};
export default _default;
