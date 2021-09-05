import { Event } from "./event.js";
import { print } from "./utils.js";


class Interval {
    totalTick = 1;
    executed = false;
    constructor(callback, interval, once) {
        this.callback = callback;
        this.interval = interval;
        this.once = once;
    }
    isRemovable() {
        return this.once && this.executed;
    }
    tick() {
        if(this.totalTick++ % this.interval === 0) {
            this.callback();
            this.executed = true;
        }
    }
}

class IntervalHandler {
    intervals = {};
    intervalID = 0;
    tick() {
        for(const id in this.intervals) {
            const interval = this.intervals[id];
            interval.tick();
            if(interval.isRemovable()) {
                this.remove(id);
            }
        }
    }
    add(interval) {
        const id = this.intervalID++;
        this.intervals[id] = interval;
        return id;
    }
    remove(id) {
        delete this.intervals[id];
    }
}

export const Tick = new (class {
    #intervalHandler = new IntervalHandler();

    constructor() {
        Event.on("tick", _ => this.#intervalHandler.tick());
    }

    setInterval(callback, interval) {
        return intervalHandler.add(
            new Interval(callback, interval, false)
        );
    }

    clearInterval(id) {
        intervalHandler.remove(id);
    }

    setTimeout(callback, timeout) {
        return intervalHandler.add(
            new Interval(callback, timeout, true)
        );
    }

    clearTimeout(id) {
        intervalHandler.remove(id);
    }
})();
