const fs = require("fs-extra");
const fileHelpers = require("../../../helpers/fileHelpers");
const markupTransformer = require("../MarkupTransformer");
const config = require("./config");

const generateTemplate = page => {
    let markup      = page.children.map(child => markupTransformer.generateMarkup(child)).join("\t");
    const template = `<template>\n\t<div>\n\t${markup}\n\t</div>\n</template>`;
    return template;
}
const generateScriptPart = page => {
    let scriptContent = "";
    // TODO: we need to be able to find the components again -> might use a symlink?
    const includes = 
    `
        import ActionControl from "${config.componentPath}/ActionControl";
        import InputControl from "${config.componentPath}/InputControl";
    `;
    const moduleExports = `
        export default {
            components : {
                ActionControl,
                InputControl
            }
        }
    `;
    scriptContent = `${includes}\n${moduleExports}`;
    const script = `<script>\n\t${scriptContent}\n</script>`;

    return script;
}
const generateStylePart = page => {
    // TODO
}
const transform = async (pageCollection, targetDir) => {
    const pages = [...pageCollection];
    pages.forEach(async page => {
        const pageName = page.name;
        const outputPath = fileHelpers.buildPath(targetDir, pageName);
        const template = generateTemplate(page);
        const script = generateScriptPart(page);
        const markup = `${template}\n${script}`;

        try {
            await fileHelpers.createDirectoryIfNotExists(outputPath);
            await fs.writeFileSync(fileHelpers.buildPath(outputPath, "index.vue"), markup)
        } catch (error) {
            console.error("An error occurred while writing to file", error);
        }
    })
}


module.exports = {
    transform
}