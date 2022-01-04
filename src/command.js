import { Dimension, Entity } from "mojang-minecraft";


export default class Command {
    #run(command, object) {
        if(object.runCommand === undefined) return;
        return object.runCommand(command);
    }

    static run(command, object) {
        return this.#run(command, object);
    }

    static runSafe(command, object) {
        try {
            return new CommandResult(false, this.#run(command, dimension));
        }
        catch(e) {
            return new CommandResult(true, e);
        }
    }

    static selectorBuilder(selector, selectors) {
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
};
