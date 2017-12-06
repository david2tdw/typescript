function isString(x) {
    return typeof x === 'string';
}
function isNumber(x) {
    return typeof x === 'number';
}
function paddingLeft(value, padding) {
    if (isString(padding)) {
        return padding + value;
    }
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    throw new Error("expected string or number, but get '" + padding + "'");
}
