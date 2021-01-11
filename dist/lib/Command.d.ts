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
         * Default value for argument if one is not passed.
         */
        default: string;
    }[];
}
/**
 * Callback for commands
 */
export declare type commandCallback = (req: Request, res: Response, next: () => void) => Promise<void> | void;
