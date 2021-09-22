import { Command } from "../command.js";
import { toJson } from "./string.js";


export function print(...obj) {
    const rawtext = JSON.stringify({
        rawtext: [{ text: obj.map(String).join(" ") }]
    }).replaceAll("\\r\\n", "\\n");
    Command.run("tellraw @a " + rawtext);
}

export function pprint(...obj) {
    print(...obj.map(o => toJson(o, 4)));
}

export function error(...obj) {
    print("§4ERROR:", ...obj);
}

export function warn(...obj) {
    print("§eWARN:", ...obj);
}