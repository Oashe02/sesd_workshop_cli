import axios from "axios";
import { Command } from "commander";
import pc from "picocolors";

class MovieCommand {
    program:Command;

    constructor(program:Command) {
        this.program = program;
    }

    register() {
        this.program.command("movie <name>")
            .description("movie ka info")
            .action(async (name: string) => {
                try {
                    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name.toLowerCase()}`);
                    const movie = response.data;
                    if (!movie) {
                        console.log(pc.yellow("Error: Kuch mila nahi is naam se"));
                        return;
                    }
                    console.log(`${pc.cyan("Title:")}  ${pc.bold(pc.white(movie.name))}`);
                    console.log(`${pc.cyan("Rating:")} ${pc.yellow(movie.rating?.average || "N/A")}\n`);
                } catch (error: any) {
                    console.error(pc.red(`${error.message}`));
                }
            });
    }
}

export default MovieCommand;
