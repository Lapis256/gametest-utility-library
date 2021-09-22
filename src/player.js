import { World } from "mojang-minecraft";
import { Command } from "./command.js";
import { Tag } from "./tag.js";
import { mergeObject } from "./object.js";


export class Player {
    #player;
    #tagSelector;

    constructor(player) {
        this.#player = player;
        this.#tagSelector = Command.selectorBuilder(player.name);
        mergeObject(this, player);
    }

    static getAll() {
        return World.getPlayers().map(p => new Player(p));
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

    toString() {
        return this.name;
    }
}
