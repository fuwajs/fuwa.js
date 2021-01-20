declare class Debug {
    protected enabled: boolean;
    constructor(enabled?: boolean);
    log(event: string, str: any): void;
    error(event: string, str: any): void;
    success(event: string, str: any): void;
    /**
     * Print an object or primitive to stdout
     * ! This function can be recursive
     * @param obj The object or primitive to print out.
     * @param tabWidth The indentation size in tabs (4 spaces)
     *

     */
    object(obj: any, tabWidth?: number): string;
}
export default Debug;
