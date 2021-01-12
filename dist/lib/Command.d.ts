import Request from './Request';
import Response from './Response';
export declare class Argument<T> {
    /**
     * Default value of the argument
     */
    readonly defaultValue: T;
    /**
     * A description of the argument
     */
    readonly desc: string;
    constructor({ defaultValue, desc }: Argument<T>);
}
/**
 * Options for your command
 * @interface
 */
export interface commandOptions {
    /**
     * Description for your command.
     */
    desc: string;
    /**
     * Command Arguments
     */
    args?: Map<string, Argument<unknown>>;
}
/**
 * Callback for commands
 */
export declare type commandCallback = (req: Request, res: Response, next: () => void) => Promise<void> | void;
