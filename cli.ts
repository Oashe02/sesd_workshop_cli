#!/usr/bin/env node
import { CliEngine } from "./cli_engine/cliEngine";
import GreetCommand from "./commands/greetCommand";
import AddCommand from "./commands/addCommand";
import SubtractCommand from "./commands/subtractCommand";
import MultiplyCommand from "./commands/multiplyCommand";
import DivideCommand from "./commands/divideCommand";
import JokeCommand from "./commands/jokeCommand";
import CountryCommand from "./commands/countryCommand";
import PokemonCommand from "./commands/pokemonCommand";
import MovieCommand from "./commands/movieCommand";
import GithubCommand from "./commands/githubCommand";

const mycli = new CliEngine();

mycli.registerCommands([
  GreetCommand,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  JokeCommand,
  CountryCommand,
  PokemonCommand,
  MovieCommand,
  GithubCommand
]);

mycli.run();
