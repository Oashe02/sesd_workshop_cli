import { Command } from "commander";
import pc from "picocolors";

export class CliEngine {
    program: Command;

    constructor() {
        this.program = new Command();
        this.program
            .description(pc.cyan("my CLI tool "));
    }

    registerCommands(commands: any[]) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }

    run() {
        console.log(pc.bold(pc.magenta("\n apka mycli mai swagat hai \n")));
        this.program.parse();
    }
}