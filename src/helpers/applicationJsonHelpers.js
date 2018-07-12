var fs = require("fs-extra");

const getApplicationNameFromJSON = (json) => {
    let name;
    console.log("trying to get the application name from file")
    try {
        jsonFile = fs.readFileSync(json);  
    } catch (error) {
        console.error("An error occurred when opening the application.json file", error);
    }
    try {
        applicationJSON = JSON.parse(jsonFile);
        if(applicationJSON.application && applicationJSON.application.name){
            name = applicationJSON.application.name;
        }
    } catch (error) {
        console.error("An error ocurred while parsing the application.json", error);
    }
    return name;
}

module.exports = {
    getApplicationNameFromJSON
}
