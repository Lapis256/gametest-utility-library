import { world } from "mojang-minecraft";

import toJson from "./toJson.js";
import { RawTextBuilder } from "../rawTextBuilder/index.js";


export function print(...obj) {
    const rawtext = new RawTextBuilder().addText(obj.map(String).join(" "));
    const dimension = world.getDimension("overworld");
    dimension.runCommand("tellraw @a " + rawtext.buildJson());
}


export function pprint(...obj) {
    print(...obj.map(o => toJson(o, 4)));
}


export function p(obj) {
    print(obj);
    return obj;
}


export function pp(obj) {
    pprint(obj);
    return obj;
}
