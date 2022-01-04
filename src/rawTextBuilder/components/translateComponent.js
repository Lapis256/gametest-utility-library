import Base from "./rawTextComponent.js";


export default class TranslateComponent extends Base {
    name = "translate";

    #getWith() {
        return this.value.with.map(value => {
            if(value instanceof RawTextBuilder) {
                return value.build();
            }
            return value;
        });
    }

    build() {
        const result = { [this.name]: this.value.translate };
        if(this.value.with.length <= 0) {
            return result;
        }
        return { ...result, with: this.#getWith() };
    }
}
