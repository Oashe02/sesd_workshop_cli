import { Command } from "commander";
import pc from "picocolors";

class MultiplyCommand {
    program:Command;

    constructor(program:Command) {
        this.program = program;
    }

    register() {
        this.program.command("multiply <a> <b>")
            .description("Multiplies two numbers")
            .action((a: string, b: string) => {
                const product = Number(a) * Number(b);
                console.log(`${pc.yellow(a)} ${pc.gray("*")} ${pc.yellow(b)} ${pc.gray("=")} ${pc.green(pc.bold(product))}`);
            });
    }
}

export default MultiplyCommand;
