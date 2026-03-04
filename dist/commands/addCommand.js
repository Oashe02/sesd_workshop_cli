"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
class AddCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("add <a> <b>")
            .description("Adds two numbers")
            .action((a, b) => {
            this.add(a, b);
        });
    }
    add(a, b) {
        const sum = Number(a) + Number(b);
        console.log(`${picocolors_1.default.blue(a)} ${picocolors_1.default.gray("+")} ${picocolors_1.default.blue(b)} ${picocolors_1.default.gray("=")} ${picocolors_1.default.green(picocolors_1.default.bold(sum))}`);
    }
}
exports.default = AddCommand;
