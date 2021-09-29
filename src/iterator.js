export class AdvancedIterator {
    #iterator;

    constructor(iterator) {
        this.#iterator = iterator;
    }

    *[Symbol.iterator]() {
        for(const i of this.#iterator){
            yield i;
        }
    }

    map(func) {
        const iterator = this.#iterator;
        return new AdvancedIterator((function*() {
            for(const i of iterator) {
                yield func(i);
            }
        })());
    }

    filter(check) {
        const iterator = this.#iterator;
        return new AdvancedIterator((function*() {
            for(const i of iterator) {
                if(!check(i)) continue;
                yield i;
            }
        })());
    }

    find(check) {
        for(const i of this.#iterator) {
            if(!check(i)) continue;
            return i;
        }
    }
}
