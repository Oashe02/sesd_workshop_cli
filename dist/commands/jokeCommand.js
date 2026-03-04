"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
const boxen_1 = __importDefault(require("boxen"));
class JokeCommand {
    constructor(program) {
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
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            const jokeContent = [
                `${picocolors_1.default.cyan(picocolors_1.default.bold("Q: "))}${picocolors_1.default.white(res.data.setup)}`,
                "",
                `${picocolors_1.default.green(picocolors_1.default.bold("A: "))}${picocolors_1.default.italic(picocolors_1.default.white(res.data.punchline))}`
            ].join("\n");
            console.log((0, boxen_1.default)(jokeContent, {
                padding: 1,
                margin: 1,
                borderStyle: 'classic',
                borderColor: 'yellow',
                title: 'Random Joke ',
                titleAlignment: 'center'
            }));
        }
        catch (error) {
            console.error(picocolors_1.default.red(`${error.message}`));
        }
    }
}
exports.default = JokeCommand;
