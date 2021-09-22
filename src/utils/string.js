import { Command } from "./command.js";


function isClass(obj) {
    return obj.toString().startsWith("class ");
}

function isGenerator(obj) {
    return obj[Symbol.iterator] &&
           obj[Symbol.iterator].name === "[Symbol.iterator]" &&
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
                if(Array.isArray(value)) {
                    return value;
                }
                let obj = {};
                for(const i in value) {
                    obj[i] = value[i];
                }
                return obj;
            
            case "undefined":
                return null;
            
            default:
                return value;
        }
    }, indent);
}
