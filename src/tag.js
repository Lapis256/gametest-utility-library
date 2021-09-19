import { Player, Entity } from "mojang-minecraft";
import { Command } from "./command.js";


export const Tag = new (class {
    #TagRegex = /§a(?<tag>.*?)§r(?:,\s|$)/g;

    getAllTags(selector) {
        const { statusMessage } = Command.run(`tag ${selector} list`);
        return [...statusMessage.matchAll(this.#TagRegex)].map(m => m.groups.tag);
    }

    hasTag(selector, tag) {
        return this.getAllTags(selector).includes(tag);
    }

    addTag(selector, tag) {
        if(this.hasTag(selector, tag)) return false;
        try {
            Command.run(`tag ${selector} add "${tag}"`);
            return true;
        }
        catch {
            return false;
        }
    }

    removeAllTags(selector) {
        this.getAllTags(selector).forEach(t => this.removeTag(selector, t));
        return true;
    }

    removeTag(selector, tag) {
        if(!this.hasTag(selector, tag)) return false;
        try {
            Command.run(`tag ${selector} remove "${tag}"`);
            return true;
        }
        catch {
            return false;
        }
    }
})();