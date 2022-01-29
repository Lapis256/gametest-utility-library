import { RawTextBuilder } from "./rawTextBuilder/index.js";


export class Player {
    #player;

    constructor(player) {
        this.#player = player;
    }

    sendRawtext(text, ..._with) {
        const rawText = new RawTextBuilder()
            .addTranslate(text, ..._with.map(String))
            .buildJson();
        this.#player.runCommand("tellraw @s " + rawText);
    }

    showRawtext(text, ..._with) {
        const rawText = new RawTextBuilder()
            .addTranslate(text, ..._with.map(String))
            .buildJson();
        this.#player.runCommand("titleraw @s actionbar " + rawText);
    }
}
