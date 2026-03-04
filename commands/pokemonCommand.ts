import { Command } from "commander";
import axios from "axios";
import pc from "picocolors";
import boxen from "boxen";

class PokemonCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("pokemon <name>")
            .description("pokemon ka info")
            .action(async (name: string) => {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
                    const pokemon = response.data;

                    const pokemonInfo = [
                        `${pc.magenta(pc.bold("Name:"))}   ${pc.bold(pokemon.name.toUpperCase())}`,
                        `${pc.cyan(pc.bold("Height:"))} ${pc.white(pokemon.height)}`,
                        `${pc.cyan(pc.bold("Weight:"))} ${pc.white(pokemon.weight)}`,
                        `${pc.cyan(pc.bold("Types:"))}  ${pc.green(pokemon.types.map((t: any) => t.type.name).join(", "))}`
                    ].join("\n");

                    console.log(
                        boxen(pokemonInfo, {
                            title: `pokémon: ${pokemon.name.toUpperCase()}`,
                            titleAlignment: 'center',
                            padding: 1,
                            margin: 1,
                            borderStyle: 'singleDouble',
                            borderColor: 'red'
                        })
                    );

                } catch (error: any) {
                    console.error(pc.red(`Error: Pokémon '${pc.bold(name)}' not found.`));
                }
            });
    }
}

export default PokemonCommand;
