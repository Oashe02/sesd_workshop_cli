import axios from "axios";
import { Command } from "commander";
import pc from "picocolors";
import boxen from "boxen";

class GithubCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("github <username>")
            .description("Fetches GitHub user information")
            .action(async (username: string) => {
                await this.fetchGithubUser(username);
            });
    }

    async fetchGithubUser(username: string) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const user = response.data;

            const userInfo = [
                `${pc.cyan(pc.bold("Public Repos:"))} ${pc.yellow(user.public_repos)}`,
                `${pc.cyan(pc.bold("Followers:"))}    ${pc.green(user.followers)}`,
                `${pc.cyan(pc.bold("Following:"))}    ${pc.blue(user.following)}`
            ].join("\n");

            console.log(
                boxen(userInfo, {
                    title: `github: ${user.login}`,
                    titleAlignment: 'center',
                    padding: 1,
                    margin: 1,
                    borderStyle: 'round',
                    borderColor: 'magenta'
                })
            );

        } catch (error) {
            console.error(pc.red(`'${pc.bold(username)}' nahii mila`));
        }
    }
}

export default GithubCommand;
