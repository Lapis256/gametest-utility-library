import { World } from "Minecraft";
import { EventNotDefined } from "./errors.js";
import { print } from "./utils.js";


export const Event = new (class {
    /*
    [
        { callback, originalCallback, eventName }
    ]
    */
    #callbacks = [];

    on(eventName, callback) {
        const event = World.events[eventName];
        if(!event) {
            throw new EventNotDefined(eventName);
        }
        const newCallback = eventData => {
            try {
                callback(eventData);
            }
            catch(e) {
                print("Event Running Error: " + e);
            }
        }
        
        event.subscribe(newCallback);
        
        const callbackData = {
            eventName,
            callback: newCallback,
            originalCallback: callback
        }
        this.#callbacks.push(callbackData);
    }

    off(callback) {
        this.#callbacks = this.#callbacks.filter(c => {
            if(c.originalCallback !== callback) {
                return true;
            }
            World.events[c.eventName].unsubscribe(c.callback);
            return false;
        });
    }
})();
