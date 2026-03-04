import { Command } from "commander";
import pc from "picocolors";

class AddCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("add <a> <b>")
            .description("Adds two numbers")
            .action((a: string, b: string) => {
                this.add(a, b);
            });
    }

    add(a: string, b: string) {
        const sum = Number(a) + Number(b);
        console.log(`${pc.blue(a)} ${pc.gray("+")} ${pc.blue(b)} ${pc.gray("=")} ${pc.green(pc.bold(sum))}`);
    }
}

export default AddCommand;
