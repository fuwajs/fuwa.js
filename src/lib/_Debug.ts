import Colors from './Colors';
let chalk = {
    bold: { blue: s => s },
    yellow: s => s,
    red: s => s,
    grey: s => s,
    green: s => s
}
try {
    chalk = require('chalk');
} catch {}
class Debug {
    protected enabled: boolean;
    constructor(enabled = false) { this.enabled = enabled; }
    public log(event: string, str: any) {
        if(!this.enabled) return;
        console.log(
            `${chalk?.bold?.blue('['+event.toUpperCase()+']')}: ${str} - ${chalk.grey(new Date().toLocaleString())}`,
        )
    }
    public error(event: string, str: any) {
        if(!this.enabled) return;      
        console.log(
            `${chalk?.bold?.blue('['+event.toUpperCase()+']')}: ${chalk.red(str)} - ${chalk.grey(new Date().toLocaleString())}`,
        );
    }
    public success(event: string, str: any) {
        if(!this.enabled) return;      
        console.log(
            `${chalk?.bold?.blue('['+event.toUpperCase()+']')}: ${chalk.green(str)} - ${chalk.grey(new Date().toLocaleString())}`,
        );
    }
    
    //! This function can be recurssive
    object(obj: any, tabWidth = 0) {
        let str = '';
        let tabs = '';
        for(const e of new Array(tabWidth)) tabs+='    ';
        let i = 0;
        for(const key in obj) {
            let val = obj[key];
            if(val === null) val = chalk.red('null');
            if(typeof val === 'object' && !Array.isArray(val)) val = '\n'+this.object(val, tabWidth+1);
            if(Array.isArray(val)) val = '\n'+this.object(Object.fromEntries(val.entries()), tabWidth+1);
            // extra syntax highlighting
            if(typeof val === 'number') val = chalk.yellow(val);
            let isObj = false;
            try { JSON.parse(val); isObj = true } catch{}
            if(typeof val === 'string' && isObj && val !== 'null') val = chalk.green(`"${val}"`);
            str += `${tabs}${chalk.bold.blue(`[${key}]`)}: ${val}${Object.keys(obj).length !== i  && !val.startsWith('\n') ? ',\n' : ''}`
            i++;
        }
        return str;
    }
}

export default Debug;