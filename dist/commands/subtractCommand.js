"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
class SubtractCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("subtract <a> <b>")
            .description("Subtracts two numbers")
            .action((a, b) => {
            const difference = Number(a) - Number(b);
            console.log(`${picocolors_1.default.magenta(a)} ${picocolors_1.default.gray("-")} ${picocolors_1.default.magenta(b)} ${picocolors_1.default.gray("=")} ${picocolors_1.default.yellow(picocolors_1.default.bold(difference))}`);
        });
    }
}
exports.default = SubtractCommand;
