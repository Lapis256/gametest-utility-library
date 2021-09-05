import { World } from "Minecraft";
import { Command } from "./command.js";
import { Tag } from "./tag.js";


export class Player {
    #player;
    #tagSelector;

    constructor(player) {
        this.#player = player;
        this.#tagSelector = Command.selectorBuilder(player.name);
        
        for(const attr in player) {
            this[attr] = player[attr];
        }
    }

    static getAll() {
        return World.getPlayers().map(Player.get);
    }

    getAllTags() {
        return Tag.getAllTags(this.#tagSelector);
    }

    hasTag(tag) {
        return Tag.hasTag(this.#tagSelector, tag);
    }

    addTag(tag) {
        return Tag.addTag(this.#tagSelector, tag);
    }

    removeAllTags() {
        return Tag.removeAllTags(this.#tagSelector);
    }

    removeTag(tag) {
        return Tag.removeTag(this.#tagSelector, tag);
    }
}
