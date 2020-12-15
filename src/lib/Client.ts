import WebSocket from 'ws';
import User from './User';
import { discordAPI, OPCodes } from './_Const';

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
export interface clientOptions {
    /**
     * The owners' discord ID 
     */
    owners: string[]|string
    /**
     * To turn on the debug mode, not recommed to turn this on unless your debugging
     * the library itself
     */
    debug?: boolean

    
}
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 */
class Client {
    public bot: User|null = null;
    public ws: WebSocket|undefined;
    private debugMode: boolean;
    private events: Map<eventNames, Function> = new Map;
    private prefix: string;
    private loop: NodeJS.Timeout|undefined;
    private commands: Map<string, { cb:commandCallback, options: commandOptions }[]> = new Map;
    private middlware: commandCallback[] = [];
    /**
     * @param {string} prefix The prefix for your bot
     */
    constructor(prefix: string, options?: clientOptions) {
        this.debugMode = options?.debug||false;
        this.prefix = prefix
    }
    debug(bug: Error|string) {
        if(this.debugMode) {
            if(bug instanceof Error) { throw bug }
            else { console.log(bug+'\n') }
        }
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
        this.ws = new WebSocket(discordAPI.gateway);
        const self = this;
        this.ws.on('open', function() {
            self.debug(`Connect to ${discordAPI.gateway}`);
            this.on('message', (e) => {
                const res = JSON.parse(e.toString());
                self.debug(`Incoming message from ${discordAPI.gateway}:
Event: ${res.t}
OPCOde: ${res.op}
Other: ${res.s}
Data: ${JSON.stringify(res.d, null, (self.debugMode ? 4 : 0)).replace('\\', '')}`);
                let lastHeartbeat = Date.now();
                switch(res.op) {  
                    
                    case(OPCodes.HELLO):
                    
                        // Start heartbeat loop
                        self.loop = setInterval(() => {
                            this.send(JSON.stringify({
                                op: 1,
                                d: 251
                            }));
                            let now = Date.now();
                            self.debug(
                                `Requested a heartbeat ${new Date(now).toDateString()} with a ${(now-lastHeartbeat)/1000}ms delay
                            `);
                            lastHeartbeat = now;
                        }, res.d.heartbeat_interval);
                        // Send Identify
                        const cred = JSON.stringify({
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
                        }, null, (self.debugMode ? 4 : 0));
                        self.debug(`Attempting to identify with the following credentials: ${cred.replace('\\', '')}`)
                        this.send(cred);
                        self.debug('Credentials sent');

                        break;
                }
                switch(res.t) {
                    case 'READY':
                        self.debug(`
                            Logged in on ${new Date().toDateString()}
                        `);
                        
                        self.bot = new User(res.d.user);
                        let fn = self.events.get('READY');
                        fn ? fn() : 0;
                        break;
                }
            
            });
        });
    }
    logout(end: boolean = true) {
        if(this.ws && this.loop) {
            clearInterval(this.loop);
            end ? process.exit() : 0;
        }
    }
}



export default Client;