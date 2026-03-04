"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
class GreetCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("greet <name>")
            .description("Greets the user by name")
            .action((name) => {
            this.sayHello(name);
        });
    }
    sayHello(name) {
        console.log(`${picocolors_1.default.green("Hello")}, ${picocolors_1.default.cyan(name)}...`);
    }
}
exports.default = GreetCommand;
