export default class RawTextComponent {
    name;
    #value;

    constructor(value) {
        this.#value = value;
    }

    #getValue() {
        if(this.#value.build === undefined) {
            return this.#value;
        }
        return this.#value.build();
    }

    get value() {
        return this.#value;
    }

    build() {
        return { [this.name]: this.#getValue() };
    }
}
