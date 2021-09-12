import { Command } from "./command.js";


export function print(...obj) {
    const rawtext = JSON.stringify({
        rawtext: [{ text: obj.join(" ") }]
    }).replaceAll("\\r\\n", "\\n");
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
    return JSON.stringify(data, (key, value) => {
        switch(typeof value) {
            case "function":
                if(value.toString().startsWith("class ")) {
                    return `[class ${value.name || key}]`;
                }
                return `[function ${value.name || key}]`;
            
            case "object":
                let obj = {};
                for(const i in value) {
                    obj[i] = value[i];
                }
                return obj;
            
            default:
                return value;
        }
    }, indent);
}

export function pprint(...obj) {
    print(...obj.map(o => toJson(o, 4)));
}

export function* range(start, stop, step) {
    if(!step) step = 1;
    if(!stop) {
        stop  = start;
        start = 0;
    }
    for(let i = start; i < stop; i += step){
        yield i;
    }
}

export function* range2d(xRange, zRange) {
    for(const x of range(xRange)) {
        for(const z of range(zRange)) {
            yield [x, z];
        }
    }
}

export function* range3d(xRange, yRange, zRange) {
    for(const x of range(xRange)) {
        for(const y of range(yRange)) {
            for(const z of range(zRange)) {
                yield [x, y, z];
            }
        }
    }
}
