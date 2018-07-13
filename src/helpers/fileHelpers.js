var path = require('path');
var fs = require("fs-extra");

function fromDir(startPath,filter,callback){
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback);
        }
        else if (filter.test(filename)) callback(filename);
    };
};
const createDirectoryIfNotExists = async(dir) => {
    try {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        return dir;
    } catch (error) {
        console.error("An error occurred while creating directory", error);
    }
}
const buildPath = (...parts) => {
    let result ="";
    parts.forEach(part => {
        if(result.match(/\/+$/) || result === ""){
            result += part
        } else {
            result += "/" + part;
        }
    })
    return result;
}
module.exports = {
    fromDir,
    createDirectoryIfNotExists,
    buildPath
}