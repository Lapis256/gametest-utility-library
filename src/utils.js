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
    return obj.toString().startsWith("class ");
}

function isGenerator(obj) {
    return obj[Symbol.iterator].name === "[Symbol.iterator]" &&
           typeof obj.next === "function";
}

export function toJson(data, indent = 4) {
    return JSON.stringify(data, (key, value) => {
        switch(typeof value) {
            case "function":
                if(isClass(value)) {
                    return `[class ${value.name || key}]`;
                }
                return `[function ${value.name || key}]`;
            
            case "object":
                if(isGenerator(value)) {
                    return `[generator ${key || "Generator"}]`;
                }
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
    if(stop === undefined) {
        stop  = start;
        start = 0;
    }
    for(let i = start; step > 0 ? i < stop : i > stop; i += step){
        yield i;
    }
}

function argParser(range) {
    if(typeof range === "number") {
        return [ 0, range ];
    }
    return range;
}

export function* range2d(xRange, zRange) {
    for(const x of range(...argParser(xRange)))
    for(const z of range(...argParser(zRange))) {
        yield [x, z];
    }
}

export function* range3d(xRange, yRange, zRange) {
    for(const x of range(...argParser(xRange)))
    for(const y of range(...argParser(yRange)))
    for(const z of range(...argParser(zRange))) {
        yield [x, y, z];
    }
}
