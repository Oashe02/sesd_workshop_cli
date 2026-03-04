"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
class MovieCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("movie <name>")
            .description("movie ka info")
            .action(async (name) => {
            var _a;
            try {
                const response = await axios_1.default.get(`https://api.tvmaze.com/singlesearch/shows?q=${name.toLowerCase()}`);
                const movie = response.data;
                if (!movie) {
                    console.log(picocolors_1.default.yellow("Error: Kuch mila nahi is naam se"));
                    return;
                }
                console.log(`${picocolors_1.default.cyan("Title:")}  ${picocolors_1.default.bold(picocolors_1.default.white(movie.name))}`);
                console.log(`${picocolors_1.default.cyan("Rating:")} ${picocolors_1.default.yellow(((_a = movie.rating) === null || _a === void 0 ? void 0 : _a.average) || "N/A")}\n`);
            }
            catch (error) {
                console.error(picocolors_1.default.red(`${error.message}`));
            }
        });
    }
}
exports.default = MovieCommand;
