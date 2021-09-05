import { World } from "Minecraft";
import { EventNotDefined } from "./errors.js";
import { print } from "./utils.js";


export const Event = new (class {
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
        return newCallback;
    }

    off(eventName, callback) {
        const event = World.events[eventName];
        if(!event) {
            throw new EventNotDefined(eventName);
        }
        event.unsubscribe(callback);
    }
})();
