import { world } from "mojang-minecraft";

void function() {
    const func = (ev) => {
        ev.player.runCommand("list");
        world.events.playerJoin.unsubscribe(func);
    }
    world.events.playerJoin.subscribe(func);
}();
