import Base from "./rawTextComponent.js";


export default class ScoreComponent extends Base {
    name = "score";

    #getName() {
        const { name } = this.value;
        if(name.build === undefined) {
            return name;
        }
        return name.build();
    }

    #getScore() {
        const { objective, value } = this.value;
        const result = { name: this.#getName(), objective };

        if(value === undefined) {
            return result;
        }
        return { ...result, value };
    }

    build() {
        return { [this.name]: this.#getScore() };
    }
}
