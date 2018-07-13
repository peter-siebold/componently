const NuxtPageTransformer = require("./nuxt/Page");
const applicationJsonHelpers = require("../../helpers/applicationJsonHelpers");

const transformPages = async (transformerSettings) => {
    const pages = applicationJsonHelpers.getPages(transformerSettings.applicationJSON);

    switch(transformerSettings.platform) {
        case "next": 
            // TODO
        break;
        default:
            // TODO call Nuxt Page Transformer
            console.log("call nuxt transformer")
            await NuxtPageTransformer.transform(pages, transformerSettings.targetPageDir);
        break;
    }
}



module.exports = {
    transformPages
}