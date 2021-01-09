declare const _default: {
    GET(path: string, token: string): Promise<any>;
    DELETE(path: string, token: string): Promise<any>;
    OTHER(method: string, path: string, token: string, data: any): Promise<any>;
};
export default _default;
