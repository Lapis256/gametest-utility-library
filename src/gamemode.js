import { GameMode } from "mojang-minecraft";


class _GameMode {
    #checkGameMode(player, mode) {
        try {
            player.runCommand(`testfor @s[m=${mode}]`);
            return true;
        } catch {
            return false;
        }
    }

    isCreative(player) {
        return this.#checkGameMode(player, "c");
    }

    isSurvival(player) {
        return this.#checkGameMode(player, "s");
    }

    isAdventure(player) {
        return this.#checkGameMode(player, "a");
    }

    isDefault(player) {
        return this.#checkGameMode(player, "d");
    }

    get(player) {
        if(this.isCreative(player)) {
            return GameMode.creative;
        }
        if(this.isSurvival(player)) {
            return GameMode.survival;
        }
        if(this.isAdventure(player)) {
            return GameMode.adventure;
        }
    }
}

export const Gamemode = new _GameMode();
