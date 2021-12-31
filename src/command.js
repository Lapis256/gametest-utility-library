import { Commands, World } from "mojang-minecraft";
import { mergeObject } from "./object.js";


class CommandResult {
    constructor(isError, obj) {
        this.isError = isError;
        
        mergeObject(this, obj);
    }
}

export const Command = new (class {
    #run(command, dimension = "overworld") {
        if(typeof dimension === "string") {
            dimension = World.getDimension(dimension);
        }
        return Commands.run(command, dimension);
    }

    run(command, dimension) {
        return this.#run(command, dimension);
    }

    runSafe(command, dimension) {
        try {
            return new CommandResult(false, this.#run(command, dimension));
        }
        catch(e) {
            return new CommandResult(true, e);
        }
    }

    selectorBuilder(selector, selectors) {
        if(!selectors) {
            if(selector.startsWith("@")) return selector;
            else return `"${selector}"`;
        }

        const selectorArray = [];
        for(const key in selectors) {
            const rawValue = selectors[key];
            const value = rawValue.includes(" ") ? `"${rawValue}"` : rawValue;
            selectorArray.push(`${key}=${value}`);
        }
        return `${selector}[${selectorArray.join(",")}]`;
    }
})();
