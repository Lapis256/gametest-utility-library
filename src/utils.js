import { Command } from "./command.js";


export function print(...obj) {
    const rawtext = JSON.stringify({
        rawtext: [{ text: obj.join(" ") }]
    });
    Command.run("tellraw @a " + rawtext);
}

export function error(...obj) {
    print("§4ERROR:", ...obj);
}

export function warn(...obj) {
    print("§eWARN:", ...obj);
}

function isClass(obj) {
    return typeof obj === "function" &&
           obj.toString().startsWith("class ");
}

export function toJson(data, indent = 4) {
    return JSON.stringify(data, (k, v) => {
        if(isClass(v)) {
            return `[class ${v.name}]`;
        }
        else if(typeof v === "function") {
            return `[function ${v.name}]`;
        }
        return v;
    }, indent);
}

export function pprint(...obj) {
    print(...obj.map(o => toJson(o, 4)));
}
