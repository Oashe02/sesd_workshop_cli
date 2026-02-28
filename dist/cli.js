#!/usr/bin/env node
const { Command } = require("commander");
const axios = require("axios");
const program = new Command();
program.command("greet <name>").action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <a> <b>")
    .description("Adds two numbers")
    .action((a, b) => {
    const sum = Number(a) + Number(b);
    console.log(`yeh le ${sum}`);
});
program
    .command("subtract <a> <b>")
    .description("Subtracts two numbers")
    .action((a, b) => {
    const difference = Number(a) - Number(b);
    console.log(`yeh le ${difference}`);
});
program
    .command("multiply <a> <b>")
    .description("Multiplies two numbers")
    .action((a, b) => {
    const product = Number(a) * Number(b);
    console.log(`yeh le ${product}`);
});
program
    .command("divide <a> <b>")
    .description("Divides two numbers")
    .action((a, b) => {
    if (Number(b) === 0) {
        console.log("Error: zero se nhi hoga divide");
        return;
    }
    const q = Number(a) / Number(b);
    console.log(`yeh le ${q}`);
});
program
    .command("joke")
    .description("Tells a random joke")
    .action(async () => {
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(res.data.setup);
        console.log(res.data.punchline);
    }
    catch (error) {
        console.error("error:", error);
    }
});
program.command("country bata")
    .description("Tells a random country name")
    .action(async () => {
    var _a, _b;
    try {
        const res = await axios.get("https://restcountries.com/v3.1/all?fields=name");
        const countries = res.data;
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        console.log(`Yeh le country: ${randomCountry.name.common}`);
    }
    catch (error) {
        console.error("Error fetching country:", ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message);
    }
});
program
    .command("weather")
    .description("Tells Weather in London")
    .action(async () => {
    try {
        const response = await axios.get("https://wttr.in/London?format=j1");
        const weather = response.data;
        const current = weather.current_condition[0];
        console.log(`Weather in London:`);
        console.log(`Temp: ${current.temp_C}°C`);
        console.log(`Condition: ${current.weatherDesc[0].value}`);
        console.log(`Humidity: ${current.humidity}%`);
    }
    catch (error) {
        console.error("Error fetching weather:", error.message);
    }
});
program
    .command("pokemon <name>")
    .description("pokemon ka info")
    .action(async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const pokemon = response.data;
        console.log(`Pokemon: ${pokemon.name.toUpperCase()}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log(`Types: ${pokemon.types.map(t => t.type.name).join(", ")}`);
    }
    catch (error) {
        console.error("Error fetching pokemon:", error.message);
    }
});
program
    .command("movie <name>")
    .description("movie ka info")
    .action(async (name) => {
    var _a;
    try {
        const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name.toLowerCase()}`);
        const movie = response.data;
        if (!movie) {
            console.log("Error: Kuch mila nahi is naam se");
            return;
        }
        console.log(`Title: ${movie.name}`);
        console.log(`Rating: ${((_a = movie.rating) === null || _a === void 0 ? void 0 : _a.average) || "N/A"}`);
    }
    catch (error) {
        console.error("Error fetching movie:", error.message);
    }
});
program.parse();
