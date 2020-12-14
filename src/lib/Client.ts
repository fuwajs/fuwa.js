import WebSocket from 'ws';
import { OPCodes } from './_Const';

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
 * TODO: change request res and next function types to actual types
 */
export type commandCallback = (req: any, res: any, next: any) => Promise<void>|void;
export type eventNames = 'READY';
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 */
class Client {
    ws: WebSocket|undefined;
    private events: Map<eventNames, Function> = new Map;
    private prefix: string;
    private loop: NodeJS.Timeout|undefined;
    private commands: Map<string, { cb:commandCallback, options: commandOptions }[] > = new Map;
    private middlware: commandCallback[] = [];
    /**
     * @param {string} prefix The prefix for your bot
     */
    constructor(prefix: string) {
        this.prefix = prefix
    }
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example 
     * cli.command(['ping', 'latency'], (res, res) => {
     *      res.send('Pong!'); // send message
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
    on(event: eventNames, cb: Function) {
        this.events.set(event, cb)
        return this;
    }
    /**
     * Add a middleware
     * @param {commandCallback} cb Your middleware function 
     * @returns {Client}
     * @description a function that is ran before every command
     * @example
     * 
     * cli.use((req, res, next) => {
     *      req.send(`${req.command} has been used!`);
     *      next(); // call the next middlware/command
     * })
     */
    use(cb: commandCallback) {
        this.middlware.push(cb);
        return this;
    }
    /**
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     */
    login(token: string|Buffer) {
        this.ws = new WebSocket('wss://gateway.discord.gg/?v=6&encoding=json');
        const self = this;
        this.ws.onopen = function() {
            this.onmessage = (e) => {
                const res = JSON.parse(e.data.toString());
                console.log(res);

                switch(res.op) {  
                    case(OPCodes.HELLO):
                        self.loop = setInterval(() => {
                            this.send(JSON.stringify({
                                op: 1,
                                d: 251
                            }));
                        }, res.d.heartbeat_interval);
                        break;
                }
                switch(res.t) {
                    case 'READY':
                        let fn = self.events.get('READY');
                        fn ? fn() : 0;
                        break;
                }
            
            };
            this.send(JSON.stringify({
                op: OPCodes.IDENTIFY,
                d: {
                  token: token.toString(),
                  intents: 513,
                  properties: {
                    $os: process.platform,
                    $browser: "fuwa.js",
                    $device: "fuwa.js"
                  }
                }
            }));
        }
        const secret = token.toString();
        // TODO: Login to discord  
    }
    logout(end: boolean = true) {
        if(this.ws && this.loop) {
            clearInterval(this.loop);
            if(end) {
                process.exit();
            }
        }
    }
}



export default Client;