import { mergeObject } from "./object.js";
import { range } from "./utils/index.js";
import { AdvancedIterator } from "./iterator.js";


export class InventoryIterator extends AdvancedIterator {
    #inventory;

    constructor(entity) {
        this.#inventory = entity.getComponent("inventory").container;

        super(
            range(this.#inventory.size)
            .map(this.#inventory.getItem)
        )
    }
}
