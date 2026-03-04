#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliEngine_1 = require("./cli_engine/cliEngine");
const greetCommand_1 = __importDefault(require("./commands/greetCommand"));
const addCommand_1 = __importDefault(require("./commands/addCommand"));
const subtractCommand_1 = __importDefault(require("./commands/subtractCommand"));
const multiplyCommand_1 = __importDefault(require("./commands/multiplyCommand"));
const divideCommand_1 = __importDefault(require("./commands/divideCommand"));
const jokeCommand_1 = __importDefault(require("./commands/jokeCommand"));
const countryCommand_1 = __importDefault(require("./commands/countryCommand"));
const pokemonCommand_1 = __importDefault(require("./commands/pokemonCommand"));
const movieCommand_1 = __importDefault(require("./commands/movieCommand"));
const githubCommand_1 = __importDefault(require("./commands/githubCommand"));
const mycli = new cliEngine_1.CliEngine();
mycli.registerCommands([
    greetCommand_1.default,
    addCommand_1.default,
    subtractCommand_1.default,
    multiplyCommand_1.default,
    divideCommand_1.default,
    jokeCommand_1.default,
    countryCommand_1.default,
    pokemonCommand_1.default,
    movieCommand_1.default,
    githubCommand_1.default
]);
mycli.run();
