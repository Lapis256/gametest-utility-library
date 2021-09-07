import { World } from "Minecraft";
import { EventNotDefined } from "./errors.js";
import { print } from "./utils.js";


export const Event = new (class {
    /*
    {
        <eventName>: [
            { callback, originalCallback }
        ]
    }
    */
    #callbacks = {};

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
            callback: newCallback,
            originalCallback: callback
        }
        const callbacks = this.#callbacks[eventName];
        if(callbacks) {
            callbacks.push(callbackData);
            return;
        }
        this.#callbacks[eventName] = [callbackData];
    }

    off(eventName, callback) {
        const event = World.events[eventName];
        if(!event) {
            throw new EventNotDefined(eventName);
        }
        
        const eventCallbacks = this.#callbacks[eventName];
        if(!eventCallbacks) return;
        
        const callbacks = eventCallbacks.filter(
            v => v.originalCallback === callback
        );
        for(const { callback } of callbacks) {
            event.unsubscribe(callback);
        }
    }
})();
