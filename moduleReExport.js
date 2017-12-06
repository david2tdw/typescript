"use strict";
exports.__esModule = true;
var ParseIntBasedZipCodeValidator = /** @class */ (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
var moduleExportDeclaration_1 = require("./moduleExportDeclaration");
exports.RegExpBasedZipCodeValidator = moduleExportDeclaration_1.ZipCodeValidator;
