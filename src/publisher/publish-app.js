var fs = require("fs-extra");
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
            directory = helpers.createDirectoryIfNotExists(dir);
        } catch (error) {
            console.error("No such directory", error);
        }
    } else {
        directory = dir;
    }
    return directory;
}
const publish = ( name, input, output, platform ) => {
    let applicationJSON = getApplicationJson(input);
    if(applicationJSON) {
        if (!fs.pathExistsSync(output)){
            // we don't have an output directory, what to do now? create one?
        }
        // TODO:
        // check if we already have a valid setup for this output mode.
        // if we don't have a setup (empty directory or we just created a directory, then copy the template files for this output format to the output directory)
    }
    debugger;

    console.log("reading done");
}

module.exports= {publish};