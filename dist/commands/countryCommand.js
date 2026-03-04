"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
class CountryCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("country bata")
            .description("Tells a random country name")
            .action(async () => {
            try {
                const res = await axios_1.default.get("https://restcountries.com/v3.1/all?fields=name");
                const countries = res.data;
                const randomCountry = countries[Math.floor(Math.random() * countries.length)];
                console.log(`${picocolors_1.default.green("Yeh le country:")} ${picocolors_1.default.bold(picocolors_1.default.white(randomCountry.name.common))}\n`);
            }
            catch (error) {
                console.error(picocolors_1.default.red(`${error.message}`));
            }
        });
    }
}
exports.default = CountryCommand;
