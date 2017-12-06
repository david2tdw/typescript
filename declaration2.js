function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = '';
    buildLabel.prefix = 'hello, ';
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("sam smith"));
