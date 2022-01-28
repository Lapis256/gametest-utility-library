/*export { Event } from "./event.js";
export { GameRule } from "./gamerule.js";
export { Command } from "./command.js";
export { World } from "./world.js";
export { Tick } from "./tick.js";
export { Tag } from "./tag.js";
export { Player } from "./player.js";
export { Scoreboard } from "./scoreboard.js";
export { EventEmitter } from "./eventEmitter.js";*/

import "./src/commandInitializer.js";

export * from "./src/utils/index.js";
export * from "./src/debug/index.js";
export { Tick } from "./src/tick.js";
export { Command } from "./src/command.js";
export { Dimension } from "./src/dimension.js";
export { RawTextBuilder } from "./src/rawTextBuilder/index.js";
