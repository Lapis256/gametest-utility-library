import { Command } from "./command.js";
import { mergeObject } from "./object.js";


export class Dimension {
    #dimension;
    
    constructor(dimension) {
        this.#dimension = dimension;
        mergeObject(this, dimension);
    }
    commandRun(command) {
        return Command.run(command, this.#dimension);
    }
    commandRunSafe(command) {
        return Command.runSafe(command, this.#dimension);
    }
}
