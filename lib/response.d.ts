declare class response {
    private req;
    private token;
    constructor(req: any, token: string);
    reply(content: string): void;
    send(content: string): void;
}
export default response;
