export const Selectors = {
    allEntity: "@e",
    allPlayer: "@a",
    player: "@p",
    self: "@s"
};
Object.freeze(Selectors);

export class SelectorBuilder {
    #base;
    #selectors = [];
    #isPlayerName = false;

    constructor(base) {
        const lower = base.toLowerCase();
        if(!Object.values(Selectors).includes(lower)) {
            this.#isPlayerName = true;
            this.#base = base;
            return
        }
        this.#base = lower;
    }

    #buildSelectors() {
        if(!this.#selectors.length || this.#isPlayerName) {
            return "";
        }
        const selectors = this.#selectors.map(({ key, value }) => `${key}=${value}`);
        return `[${selectors.join(",")}]`;
    }

    add(key, value) {
        this.#selectors.push({ key, value });
        return this;
    }

    build() {
        return this.#base + this.#buildSelectors();
    }
}
