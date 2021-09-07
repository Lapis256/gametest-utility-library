import { Command } from "./command.js";


export function print(text) {
    // TODO

    //Commands.run(`tellraw @a {"rawtext":[{"text":"${text}"}]}`);
    // Commands.run(`say {"rawtext":[{"text":"${text}"}]}`);
    //Commands.run(`tellraw @a {"rawtext":[{"text":"${escape(text)}"}]}`);
    // const rawText = JSON.stringify({rawtext: [{text: text}]});
    // commandRun("tellraw @a " + rawText);
    Command.run(`say Debug: ${text}`);
}

export function toJson(data, indent = 4) {
    return JSON.stringify(data, (k, v) => {
        if(typeof v === "function") {
            return "[Function]";
        }
        return v;
    }, indent);
}

export function pprint(data, indent) {
    print(toJson(json, indent));
}
