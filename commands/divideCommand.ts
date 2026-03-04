import { Command } from "commander";
import pc from "picocolors";

class DivideCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("divide <a> <b>")
            .description("Divides two numbers")
            .action((a: string, b: string) => {
                if (Number(b) === 0) {
                    console.log(pc.red("zero se nhi hoga divide"));
                    return;
                }
                const q = Number(a) / Number(b);
                console.log(`${pc.cyan(a)} ${pc.gray("/")} ${pc.cyan(b)} ${pc.gray("=")} ${pc.green(pc.bold(q))}`);
            });
    }
}

export default DivideCommand;
