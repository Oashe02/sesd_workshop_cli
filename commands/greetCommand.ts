import { Command } from "commander";
import pc from "picocolors";

class GreetCommand {
    program:Command;

    constructor(program:Command) {
        this.program = program;
    }

    register() {
        this.program.command("greet <name>")
            .description("Greets the user by name")
            .action((name: string) => {
                this.sayHello(name);
            });
    }

    sayHello(name: string) {
        console.log(`${pc.green("Hello")}, ${pc.cyan(name)}...`);
    }
}

export default GreetCommand;