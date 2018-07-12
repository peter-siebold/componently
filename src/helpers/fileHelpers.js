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
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};
const createDirectoryIfNotExists =(dir) => {
    try {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        return dir;
    } catch (error) {
        console.error("An error occurred while creating directory", error);
    }
}


module.exports = {
    fromDir,
    createDirectoryIfNotExists
}