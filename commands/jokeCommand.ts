import axios from "axios";
import { Command } from "commander";
import pc from "picocolors";
import boxen from "boxen";

class JokeCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("joke")
            .description("Tells a random joke")
            .action(async () => {
                await this.joke();
            });
    }

    async joke() {
        try {
            const res = await axios.get("https://official-joke-api.appspot.com/random_joke");

            const jokeContent = [
                `${pc.cyan(pc.bold("Q: "))}${pc.white(res.data.setup)}`,
                "",
                `${pc.green(pc.bold("A: "))}${pc.italic(pc.white(res.data.punchline))}`
            ].join("\n");

            console.log(
                boxen(jokeContent, {
                    padding: 1,
                    margin: 1,
                    borderStyle: 'classic',
                    borderColor: 'yellow',
                    title: 'Random Joke ',
                    titleAlignment: 'center'
                })
            );
        } catch (error: any) {
            console.error(pc.red(`${error.message}`));
        }
    }
}

export default JokeCommand;