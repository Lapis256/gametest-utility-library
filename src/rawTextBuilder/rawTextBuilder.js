import ScoreComponent from "./components/scoreComponent.js";
import SelectorComponent from "./components/selectorComponent.js";
import TextComponent from "./components/textComponent.js";
import TranslateComponent from "./components/translateComponent.js";


export default class RawTextBuilder {
    #values = [];

    #add(value) {
        this.#values.push(value);
        return this;
    }

    addScore(name, objective, value) {
        return this.#add(new ScoreComponent({ name, objective, value }));
    }

    addSelector(value) {
        return this.#add(new SelectorComponent(value));
    }

    addText(text) {
        return this.#add(new TextComponent(text));
    }

    addTranslate(translate, ..._with) {
        return this.#add(new TranslateComponent({translate, with: _with}));
    }

    #insert(index, value) {
        this.#values.splice(index, 0, value);
        return this;
    }

    insertScore(index, name, objective, value) {
        return this.#insert(index, new ScoreComponent({ name, objective, value }));
    }

    insertSelector(index, value) {
        return this.#insert(index, new SelectorComponent(value));
    }

    insertText(index, text) {
        return this.#insert(index, new TextComponent(text));
    }

    insertTranslate(index, translate, ..._with) {
        return this.#insert(index, new TranslateComponent({translate, with: _with}));
    }

    remove(start, removeCount) {
        this.#values.splice(start, removeCount);
        return this;
    }

    reverse() {
        this.#values = this.#values.reverse();
        return this;
    }

    #buildValues() {
        return this.#values.map(v => v.build());
    }

    build() {
        return { rawtext: this.#buildValues() };
    }

    buildJson() {
        return JSON.stringify(this.build());
    }
}
