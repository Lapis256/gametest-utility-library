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

export function pjson(json) {
    print(JSON.stringify(json));
}
