const fs = require("fs-extra");
const templateDirectories = {
    "nuxt": `${__dirname}/../../templates/nuxt_setup/`,
    "next": `${__dirname}/../../templates/next_setup/`
}
const copyProjectFiles = async (directory, platform) => {
    let templateDir = templateDirectories[platform || "nuxt"];
    await fs.copy(templateDir, directory,  (err) => {
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