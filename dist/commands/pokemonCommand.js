"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
const boxen_1 = __importDefault(require("boxen"));
class PokemonCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("pokemon <name>")
            .description("pokemon ka info")
            .action(async (name) => {
            try {
                const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
                const pokemon = response.data;
                const pokemonInfo = [
                    `${picocolors_1.default.magenta(picocolors_1.default.bold("Name:"))}   ${picocolors_1.default.bold(pokemon.name.toUpperCase())}`,
                    `${picocolors_1.default.cyan(picocolors_1.default.bold("Height:"))} ${picocolors_1.default.white(pokemon.height)}`,
                    `${picocolors_1.default.cyan(picocolors_1.default.bold("Weight:"))} ${picocolors_1.default.white(pokemon.weight)}`,
                    `${picocolors_1.default.cyan(picocolors_1.default.bold("Types:"))}  ${picocolors_1.default.green(pokemon.types.map((t) => t.type.name).join(", "))}`
                ].join("\n");
                console.log((0, boxen_1.default)(pokemonInfo, {
                    title: `pokémon: ${pokemon.name.toUpperCase()}`,
                    titleAlignment: 'center',
                    padding: 1,
                    margin: 1,
                    borderStyle: 'singleDouble',
                    borderColor: 'red'
                }));
            }
            catch (error) {
                console.error(picocolors_1.default.red(`Error: Pokémon '${picocolors_1.default.bold(name)}' not found.`));
            }
        });
    }
}
exports.default = PokemonCommand;
