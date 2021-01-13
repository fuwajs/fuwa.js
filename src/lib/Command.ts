import Request from './Request';
import Response from './Response';


export class Argument<T extends number|string|unknown> {
    /**
     * Default value of the argument
     */
    readonly defaultValue: T;

    /**
     * A description of the argument
     */
    readonly desc: string;

    constructor({ defaultValue, desc }: Argument<T>) {
        this.defaultValue = defaultValue;
        this.desc = desc;
    }
}


/**
 * Options for your command
 * @interface
 */
export interface commandOptions {
    /**
     * Description for your command.
     */
    desc?: string;
    /**
     * Aliases for your command
     * @private
     */
    aliases?: string[]
    /**
     * Command Arguments
     */
    args?: Map<string, Argument<unknown>>;
}

/**
 * Callback for commands
 */
export type commandCallback = (
    req: Request,
    res: Response,
    next: () => void,
) => Promise<void> | void;