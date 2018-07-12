var fs = require("fs-extra");
const Setup = require("./platforms/Setup");
const helpers = require("../helpers/fileHelpers");
const transformer = require("./platforms/PageTransformation");
const applicationJsonHelpers = require("../helpers/applicationJsonHelpers");


const publish = async ( name, input, output, platform ) => {
    const targetDirectory = `${output}/${name}`;
    const targetPageDir = `${targetDirectory}/pages/`;
    let applicationJSON = applicationJsonHelpers.getApplicationJson(input);
    let isNewProject = false;

    if(applicationJSON) {
        // check if the application directory already exists or if we have to create a new application directory
        if (!fs.pathExistsSync(targetDirectory)){
            // we don't have an output directory, what to do now? create one?
            // we need to know the target platform and call the setup routine for setting up a new next or nuxt project
            helpers.createDirectoryIfNotExists(targetDirectory);
            Setup.copyProjectFiles(targetDirectory, platform);
        } else {
            // TODO check if we have an existing project within the current app dir
        }
        // TODO start with identifying the pages and then transform page one by one
        // const pages = applicationJsonHelpers.getPages(applicationJSON);
        // TODO
        console.log("transform pages....");
        const transformerSettings = {
            name,
            input,
            output,
            platform,
            applicationJSON,
            targetDirectory,
            targetPageDir
        }
        
        helpers.createDirectoryIfNotExists(targetPageDir);

        await transformer.transformPages(transformerSettings);

        // const applicationJs = getAppResourcesFromJson(applicationJSON).applicationJs;
        // await publishCustomJs(applicationJs);
    }
    console.log("Gathered the following information:")
    console.log(`Application Name: ${name}\nApplication Description: ${input}\nOutput Directory: ${output}\nTarget Platform: ${platform}`)
    console.log("reading done");
}

module.exports= {publish};