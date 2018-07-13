
const renderControl = control => {
    let ret = "";
    let transformers = {};
    if(control.controlType in transformers){
        ret = transformers[control.controlType].transformer.call(this, control);
    } else {
        ret = `<${control.controlType} class="${control.class}" id="${control.id}" ${!control.children ? "/": ""}>\n`;
    }
    return ret;
}

const generateMarkup = (child, level) => {
    var lvl = level || 2;
    var ret = `<${child.controlType} id="${child.id}" ${!child.children ? "/": ""}>\n` ;
    var ret = renderControl(child);
    if(child.children) { 
       child.children.forEach(chld => ret += "\t".repeat(lvl) + generateMarkup(chld, lvl +1)); 
       ret += "\t".repeat(lvl > 1 ? lvl -1 : lvl) + `</${child.controlType}>\n`;
    }
    return ret;
}

module.exports = {
    generateMarkup
}
