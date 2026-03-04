"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
class MultiplyCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("multiply <a> <b>")
            .description("Multiplies two numbers")
            .action((a, b) => {
            const product = Number(a) * Number(b);
            console.log(`${picocolors_1.default.yellow(a)} ${picocolors_1.default.gray("*")} ${picocolors_1.default.yellow(b)} ${picocolors_1.default.gray("=")} ${picocolors_1.default.green(picocolors_1.default.bold(product))}`);
        });
    }
}
exports.default = MultiplyCommand;
