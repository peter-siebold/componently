const generateTemplate = page => {
    const markup = `just a dummy`;
    const template = `<template>${markup}</template>`;
    console.log("generate the markup for the page");
    return template;
}
const transform = async (pageCollection, targetDir) => {
    console.log("transform....");
    console.log("targetDir", targetDir)
    const pages = [...pageCollection];
    pages.forEach(page => {
        const markup = generateTemplate(page);
        console.log(markup);
        // TODO write to file
    })
}


module.exports = {
    transform
}