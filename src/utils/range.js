import { AdvancedIterator } from "../iterator.js";

class Range extends AdvancedIterator {
    constructor(start, stop, step) {
        const check = step > 0 ?
            i => i < stop :
            i => i > stop;

        super((function*() {
            for(let i = start; check(i); i += step){
                yield i;
            }
        })());
    }
}

export function range(start, stop, step) {
    if(!step) step = 1;
    if(stop === undefined) {
        stop  = start;
        start = 0;
    }
    return new Range(start, stop, step);
}

function argParser(range) {
    if(typeof range === "number") {
        return [ 0, range ];
    }
    return range;
}

export function* range2d(xRange, zRange) {
    for(const x of range(...argParser(xRange)))
    for(const z of range(...argParser(zRange))) {
        yield [x, z];
    }
}

export function* range3d(xRange, yRange, zRange) {
    for(const x of range(...argParser(xRange)))
    for(const y of range(...argParser(yRange)))
    for(const z of range(...argParser(zRange))) {
        yield [x, y, z];
    }
}
