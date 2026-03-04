"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
const boxen_1 = __importDefault(require("boxen"));
class GithubCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("github <username>")
            .description("Fetches GitHub user information")
            .action(async (username) => {
            await this.fetchGithubUser(username);
        });
    }
    async fetchGithubUser(username) {
        try {
            const response = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const user = response.data;
            const userInfo = [
                `${picocolors_1.default.cyan(picocolors_1.default.bold("Public Repos:"))} ${picocolors_1.default.yellow(user.public_repos)}`,
                `${picocolors_1.default.cyan(picocolors_1.default.bold("Followers:"))}    ${picocolors_1.default.green(user.followers)}`,
                `${picocolors_1.default.cyan(picocolors_1.default.bold("Following:"))}    ${picocolors_1.default.blue(user.following)}`
            ].join("\n");
            console.log((0, boxen_1.default)(userInfo, {
                title: `github: ${user.login}`,
                titleAlignment: 'center',
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'magenta'
            }));
        }
        catch (error) {
            console.error(picocolors_1.default.red(`'${picocolors_1.default.bold(username)}' nahii mila`));
        }
    }
}
exports.default = GithubCommand;
