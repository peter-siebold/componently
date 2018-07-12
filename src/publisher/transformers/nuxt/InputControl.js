const InputControl = (node) => {
    let pattern = (node.validation && node.validation.pattern) ? `pattern="${node.validation.pattern}"`: "";
    return `<InputControl id="${node.id}" ${pattern} />\n`;
}

module.exports = InputControl;