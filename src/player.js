import { World } from "mojang-minecraft";
import { Command } from "./command.js";
import { Tag } from "./tag.js";
import { mergeObject } from "./object.js";
import { range } from "./utils/index.js";


export class Player {
    #player;
    #tagSelector;
    #inventory;

    constructor(player) {
        mergeObject(this, player);

        this.#player = player;
        this.player = player;
        this.#tagSelector = Command.selectorBuilder(player.name);

        this.#inventory = player.getComponent("inventory").container;
    }

    static getAll() {
        return World.getPlayers().map(p => new Player(p));
    }

    get items() {
        return range(this.#inventory.size)
               .map(i => this.#inventory.getItem(i));
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
