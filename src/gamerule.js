import { Commands } from "Minecraft";
import { Command } from "./command.js";
import { print } from "./utils.js";


export const GameRule = new (class {
    #gameruleValueConverter(value) {
        switch(value) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return Number(rawValue);
        }
    }    
    
    #gameruleParser(text) {
        const [ key, rawValue ] = text.split(" = ");
        return [ key, this.#gameruleValueConverter(rawValue) ];
    }
    
    get(ruleName) {
        try {
            const { statusMessage } = Command.run("gamerule " + ruleName);
            const [ _, value ] = this.#gameruleParser(statusMessage);
            return value;
        }
        catch {
            return;
        }
    }
    
    set(ruleName, value) {
        try {
            Command.run(`gamerule ${ruleName} ${value}`);
        }
        catch {
            return false;
        }
        return true;
    }
    
    all() {
        const { statusMessage } = Command.run("gamerule");
        const gamerules = statusMessage.split(", ").map(this.#gameruleParser);
        return Object.fromEntries(gamerules);
    }
})();
