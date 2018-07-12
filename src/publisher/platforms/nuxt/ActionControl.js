const ActionControl = (node) => {
    let route = (node.route && node.route.path) ? `path="${node.route.path}"`: "";
    return `<ActionControl id="${node.id}" ${route} />\n`;
}

module.exports = ActionControl;