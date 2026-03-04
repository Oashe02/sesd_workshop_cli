"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliEngine = void 0;
const commander_1 = require("commander");
const picocolors_1 = __importDefault(require("picocolors"));
class CliEngine {
    constructor() {
        this.program = new commander_1.Command();
        this.program
            .description(picocolors_1.default.cyan("my CLI tool "));
    }
    registerCommands(commands) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        console.log(picocolors_1.default.bold(picocolors_1.default.magenta("\n apka mycli mai swagat hai \n")));
        this.program.parse();
    }
}
exports.CliEngine = CliEngine;
