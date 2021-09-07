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
        callbacks.push(callbackData);
    }

    off(callback) {
        const callbacks = this.#callbacks.filter(
            v => v.originalCallback === callback
        );
        for(const { callback, eventName } of callbacks) {
            World.events[eventName].unsubscribe(callback);
        }
    }
})();
