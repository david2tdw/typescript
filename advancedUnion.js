function paddingLeft(value, padding) {
    if (typeof padding === 'string') {
        return padding + value;
    }
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    throw new Error("Expected string or number, but get '" + padding + "'");
}
console.log(paddingLeft('world', 4));
