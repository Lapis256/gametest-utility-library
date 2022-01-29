import { Player } from "../player.js";


export function showMessage(player, text, ..._with) {
    new Player(player).showMessage(text, ..._with);
}

export function showActionbar(player, text, ..._with) {
    new Player(player).showActionbar(text, ..._with);
}
