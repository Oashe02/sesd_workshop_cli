import { Command } from "commander";
import axios from "axios";
import pc from "picocolors";

class CountryCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("country bata")
            .description("Tells a random country name")
            .action(async () => {
                try {
                    const res = await axios.get("https://restcountries.com/v3.1/all?fields=name");
                    const countries = res.data;
                    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
                    console.log(`${pc.green("Yeh le country:")} ${pc.bold(pc.white(randomCountry.name.common))}\n`);
                } catch (error: any) {
                    console.error(pc.red(`${error.message}`));
                }
            });
    }
}

export default CountryCommand;
