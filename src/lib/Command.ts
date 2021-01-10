import Request from './Request';
import Response from './Response';
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
    args?: {
        /**
         * Length of your argument (including spaces).
         */
        length: number;
        /**
         * Defualt value for argument if one is not passed.
         */
        default: string;
    }[];
}

/**
 * Callback for commands
 * TODO: change request res and next function types to actual types
 */
export type commandCallback = (
    req: Request | null,
    res: Response,
    next: any
) => Promise<void> | void;