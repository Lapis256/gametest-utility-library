import Base from "./rawTextComponent.js";
import RawTextBuilder from "../rawTextBuilder.js";


export default class TranslateComponent extends Base {
    name = "translate";

    #getWith() {
        const [ first, ..._ ] = this.value.with;
        if(first instanceof RawTextBuilder) {
            return first.build();
        }
        return this.value.with;
    }

    build() {
        const result = { [this.name]: this.value.translate };
        if(this.value.with.length <= 0) {
            return result;
        }
        return { ...result, with: this.#getWith() };
    }
}
