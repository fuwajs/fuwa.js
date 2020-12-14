
/**
 * Options for your command
 * @interface
 */
export interface commandOptions {
    /**
     * Description for your command.
     */
    desc: string,
    /**
     * Command Arguments
     */
    args?: {
        /**
         * @name length
         * Length of your argument (including spaces).
         */
        length: number,
        /**
         * @name default
         * Defualt value for argument if one is not passed.
         */
        default: string,
    }[];
}

/**
 * Callback for commands
 * @typedef
 */
export type commandCallback = (req: any, res: any, next: any) => Promise<void>|void;

/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 * 
 */
class Client {
    private token: string;
    private prefix: string;
    private commands: Map<string, { cb:commandCallback, options: commandOptions }[] > = new Map;
    private middlware: Array<commandCallback> = [];
    /**
     * 
     * @param {string|Buffer} token The token for your bot
     * @param {string} prefix The prefix for your bot
     */
    constructor(token: string | Buffer, prefix: string) {
        this.token = token.toString();
        this.prefix = prefix;
    }
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example 
     * cli.command(['ping', 'latency'], (res, res, next) => {
     *      res.send('Pong!'); // send message
     *      next(); // run next function
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions ) {
        if(Array.isArray(name)) {
            name.forEach(key => {
                const option: commandOptions = options||{ desc: 'No description was provided' };
                let commands = this.commands.get(key);
                commands ? commands.push({ cb, options: option }) : undefined
                this.commands.set(key, commands||[{ cb, options: option }]);
            })
        } else {
            const option: commandOptions = options||{ desc: 'No description was provided' };
            let commands = this.commands.get(name);
            commands ? commands.push({ cb, options: option }) : undefined
            this.commands.set(name, commands||[{ cb, options: option }]);
        }
        return this;
    }
    use(cb: commandCallback) {
        this.middlware.push(cb);
        return this;
    }
}


export default Client;