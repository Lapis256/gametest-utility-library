import { World as _World } from "mojang-minecraft";
import { Dimension } from "./dimension.js";
import { Player } from "./player.js";


export const World = new (class {
    #excludeAttrs = ["getDimension", "getPlayers"];

    constructor() {
        for(const attr in _World) {
            if(this.#excludeAttrs.includes(attr)) continue;
            this[attr] = _World[attr];
        }
    }
    getDimension(name) {
        const dimension = _World.getDimension(name);
        return new Dimension(dimension);
    }
    getPlayers() {
        return Player.getAll();
    }
})();
