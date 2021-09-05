import { Commands } from "Minecraft";
import { CommandExecutionError } from "./errors.js";


export const Command = new (class {
    #run(command, dimension) {
        if(dimension) {
            return Commands.run(command, dimension);
        }
        return Commands.run(command);
    }

    run(command, dimension) {
        try {
            return this.#run(command, dimension);
        }
        catch(e) {
            const status = JSON.parse(e);
            throw new CommandExecutionError(command, status);
        }
    }

    runSafe(command, dimension) {
        try {
            return this.#run(command, dimension);
        }
        catch(e) {
            return JSON.parse(e);
        }
    }

    selectorBuilder(selector, selectors) {
        if(!selectors) {
            if(selector.startsWith("@")) return selector;
            else return `"${selector}"`;
        }

        const selectorArray = [];
        for(const key in selectors) {
            selectorArray.push(`${key}=${selectors[key]}`);
        }
        return `${selector}[${selectorArray.join(",")}]`;
    }
})();
