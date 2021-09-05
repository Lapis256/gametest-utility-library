class Error {
    name = "Error";
    constructor(message) {
        this.message = message;
    }
    toString() {
        return this.message;
    }
}

export class EventNotDefined extends Error {
    name = "EventNotDefined";
    constructor(eventName) {
        super(`${eventName} event is not defined.`);
    }
}

export class CommandExecutionError extends Error {
    name = "CommandExecutionError";
    constructor(command, { statusMessage, statusCode }) {
        super(statusMessage);
        this.code = statusCode;
        this.command = command;
    }
}
