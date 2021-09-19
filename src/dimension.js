import { Command } from "./command.js";


export class Dimension {
    #dimension;
    
    constructor(dimension) {
        this.#dimension = dimension;
        
        for(const attr in dimension) {
            this[attr] = dimension[attr];
        }
    }
    commandRun(command) {
        return Command.run(command, this.#dimension);
    }
    commandRunSafe(command) {
        return Command.runSafe(command, this.#dimension);
    }
}
