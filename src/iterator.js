const CANCEL = Symbol("Cancel");

export class Iterator {
    #iterator;

    constructor(iterator) {
        this.#iterator = iterator;
    }

    *[Symbol.iterator]() {
        yield* this.#iterator;
    }

    #wrapper(func) {
        const iterator = this.#iterator;
        const iter = function* () {
            for(const v of iterator) {
                const result = func(v);
                if(result === CANCEL) {
                    continue;
                }
                yield result;
            }
        }
        this.#iterator = iter();
        return this;
    }

    map(func) {
        return this.#wrapper(func);
    }

    filter(check) {
        return this.#wrapper(v => check(v) ? v : CANCEL);
    }

    find(check) {
        for(const i of this.#iterator) {
            if(check(i)) return i;
        }
    }
}
