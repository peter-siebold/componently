const yargs = require("yargs");
const getApplicationNameFromJSON = require("./src/helpers/applicationJsonHelpers").getApplicationNameFromJSON;
const publishApp = require("./src/publisher/publish-app");

const argv = yargs
    .option('name', {
    alias: 'n',
    describe: 'program specifications'
    })
    .option('input', {
        alias: 'i',
        describe: 'run your program'
    })
    .option('output', {
        alias: 'o',
        describe: 'provide a path to file'
    })
    .option('platform', {
        alias: 'p',
        default: "nuxt",
        describe: 'target platform'
    })
    .option('mode', {
        alias: 'm',
        default: "app",
        describe: 'specify a transformer mode'
    })
    .demandOption(["name", 'input'], 'Please at least a name and a path to the application.json')
    .help()
    .argv;

const command = argv._[0];
const input = argv.input;
const name = argv.name || getApplicationNameFromJSON(input);
const output = argv.output || `${__dirname}`;
const mode = argv.mode;
const platform = argv.platform;

switch (mode ){
    case "all":
        console.log("publish all applications");
        break;
    case "app":
        publishApp.publish(name, input, output, platform);
        break;
    case "css":
        console.log("bundle css for an app");
        break;
    case "js":
        console.log("bundle js for an app");
        break;
    default:
        console.log("unrecognized option");
}
