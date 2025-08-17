#!/usr/bin/env node
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import figlet from 'figlet';

function sum(a,b){return a+b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}
function subtract(a,b){return a-b;}

yargs(hideBin(process.argv))
.scriptName("calc")
.usage(chalk.green("\nUsage:") + " calc <command> [arguments]")
.command(
  "sum <a> <b>",                        // user types: calc sum 5 7
  "Add two numbers",                     // shows in --help
  (yargs) => {
    yargs.positional("a", { describe: "first number", type: "number" })
         .positional("b", { describe: "second number", type: "number" })
  },
  (argv) => {                            // handler
    console.log(chalk.blue(sum(argv.a, argv.b)));
  }
)
.command(
  "divide <a> <b>",                        // user types: calc divide 5 7
  "Add two numbers",                     // shows in --help
  (yargs) => {
    yargs.positional("a", { describe: "first number", type: "number" })
         .positional("b", { describe: "second number", type: "number" })
  },
  (argv) => {                            // handler
    console.log(chalk.blue(divide(argv.a, argv.b)));
  }
)

.command(
  "multiply <a> <b>",                        // user types: calc multiply 5 7
  "Add two numbers",                     // shows in --help
  (yargs) => {
    yargs.positional("a", { describe: "first number", type: "number" })
         .positional("b", { describe: "second number", type: "number" })
  },
  (argv) => {                            // handler
    console.log(chalk.blue(multiply(argv.a, argv.b)));
  }
)

.command(
  "subtract <a> <b>",                        // user types: calc subtract 5 7
  "Add two numbers",                     // shows in --help
  (yargs) => {
    yargs.positional("a", { describe: "first number", type: "number" })
         .positional("b", { describe: "second number", type: "number" })
  },
  (argv) => {                            // handler
    console.log(chalk.blue(subtract(argv.a, argv.b)));
  }
)
.demandCommand(0, "")
.help(false)
.version(false)
.strictCommands()
.fail((msg, err, yargsInstance) => {  // custom fail handler
    if (msg) {
      console.error(chalk.red.bold("\n Error: ") + chalk.white(msg));
      console.log(chalk.blue("\n Type `calc --help` to see available commands.\n"));
    }
    process.exit(1);
})
.parse();

//== if no options are given ==
if (process.argv.length <= 2) {
    console.log(
        chalk.hex('#FF8800')(
          figlet.textSync('Calculator Tool', { horizontalLayout: 'full' })
        )
    ); 
    console.log(""); 
    console.log(chalk.hex('#FF8800').bold("✨Welcome to Custom Cli Calculator!!✨"));
    console.log("");
    console.log(chalk.blue("Type `calc --help` to see available commands."));
    console.log(chalk.blue("Type `calc --version` to see version.\n"));
}
// == custom help ==
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(chalk.cyan.bold("\n📘 CLI Calculator Help\n"));
  console.log(chalk.yellow("Usage: ") + "calc <command> [arguments]\n");

  console.log(chalk.yellow("Commands:"));
  console.log("  " + chalk.green("sum <a> <b>")       + "       ➝ Add two numbers");
  console.log("  " + chalk.green("divide <a> <b>")    + "    ➝ Divide two numbers");
  console.log("  " + chalk.green("multiply <a> <b>")  + "  ➝ Multiply two numbers");
  console.log("  " + chalk.green("subtract <a> <b>")  + "  ➝ Subtract two numbers\n");

  console.log(chalk.yellow("Options:"));
  console.log("  " + chalk.green("--help, -h")    + "       ➝ Show this help menu");
  console.log("  " + chalk.green("--version, -v") + "    ➝ Show version\n");

  process.exit(0);
}
// === Custom Version ===
if (process.argv.includes("--version") || process.argv.includes("-v")) {
  console.log(chalk.magenta("Calc CLI v1.0.0"));
  process.exit(0);
}
