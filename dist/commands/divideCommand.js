"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
class DivideCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("divide <a> <b>")
            .description("Divides two numbers")
            .action((a, b) => {
            if (Number(b) === 0) {
                console.log(picocolors_1.default.red("zero se nhi hoga divide"));
                return;
            }
            const q = Number(a) / Number(b);
            console.log(`${picocolors_1.default.cyan(a)} ${picocolors_1.default.gray("/")} ${picocolors_1.default.cyan(b)} ${picocolors_1.default.gray("=")} ${picocolors_1.default.green(picocolors_1.default.bold(q))}`);
        });
    }
}
exports.default = DivideCommand;
