var fs = require("fs-extra");
const Setup = require("./platforms/Setup");
const helpers = require("../helpers/fileHelpers");

const getApplicationJson = (input) => {
    let jsonFile;
    let applicationJSON;
    try {
        jsonFile = fs.readFileSync(input);  
    } catch (error) {
        console.error("An error occurred when opening the application.json file", error);
    }
    try {
        applicationJSON = JSON.parse(jsonFile);
    } catch (error) {
        console.error("An error ocurred while parsing the application.json", error);
    }
    return applicationJSON;
}
const getOutputDirectory = dir => {
    let directory;
    if (!fs.existsSync(dir)){
        try {
            debugger;
            // directory = helpers.createDirectoryIfNotExists(dir);
        } catch (error) {
            console.error("No such directory", error);
        }
    } else {
        directory = dir;
    }
    return directory;
}
const publish = ( name, input, output, platform ) => {
    const targetDirectory = `${output}/${name}`;
    let applicationJSON = getApplicationJson(input);

    if(applicationJSON) {
        // check if the application directory already exists or if we have to create a new application directory
        if (!fs.pathExistsSync(targetDirectory)){
            debugger;
            // we don't have an output directory, what to do now? create one?
            // we need to know the target platform and call the setup routine for setting up a new next or nuxt project
            console.log(`Setting up a new ${platform.toUpperCase()} Project`);
            helpers.createDirectoryIfNotExists(targetDirectory);
            Setup.copyProjectFiles(targetDirectory, platform);
        } else {
            debugger;
        }
        // TODO:
        // check if we already have a valid setup for this output mode.
        // if we don't have a setup (empty directory or we just created a directory, then copy the template files for this output format to the output directory)
    }
    debugger;
    console.log("Gathered the following information:")
    console.log(`Application Name: ${name}\nApplication Description: ${input}\nOutput Directory: ${output}\nTarget Platform: ${platform}`)
    console.log("reading done");
}

module.exports= {publish};