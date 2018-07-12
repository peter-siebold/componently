const fs = require("fs-extra");
const templateDirectories = {
    "nuxt": `${__dirname}/../../templates/nuxt_setup/`,
    "next": `${__dirname}/../../templates/next_setup/`
}
const copyProjectFiles = (directory, platform) => {
    debugger;
    console.log("Copy Project files to the target directory");
    let templateDir = templateDirectories[platform || "nuxt"];

    // let templateDir = `${__dirname}/../external/htmlroot/templates/nuxt_setup/`;
    // let targetDir   = `${__dirname}/../external/htmlroot/apps/${guid}/`;
    // // copy all files from templateDir to targetDir
    fs.copy(templateDir, directory,  (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("success!");
        }
    });
}


module.exports = {
    copyProjectFiles
}