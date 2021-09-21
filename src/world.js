import { World as _World } from "mojang-minecraft";
import { Dimension } from "./dimension.js";
import { Player } from "./player.js";
import { mergeObject } from "./utils/object.js";


export const World = new (class {
    constructor() {
        mergeObject(this, _World, {
            getDimension: this.#getDimension,
            getPlayers: this.#getPlayers
        });
    }
    #getDimension(name) {
        const dimension = _World.getDimension(name);
        return new Dimension(dimension);
    }
    #getPlayers() {
        return Player.getAll();
    }
})();
