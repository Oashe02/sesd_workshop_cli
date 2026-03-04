import { Command } from "commander";
import pc from "picocolors";

class SubtractCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("subtract <a> <b>")
            .description("Subtracts two numbers")
            .action((a: string, b: string) => {
                const difference = Number(a) - Number(b);
                console.log(`${pc.magenta(a)} ${pc.gray("-")} ${pc.magenta(b)} ${pc.gray("=")} ${pc.yellow(pc.bold(difference))}`);
            });
    }
}

export default SubtractCommand;
