declare class Debug {
    protected enabled: boolean;
    constructor(enabled?: boolean);
    log(event: string, str: any): void;
    error(event: string, str: any): void;
    success(event: string, str: any): void;
    object(obj: any, tabWidth?: number): string;
}
export default Debug;
