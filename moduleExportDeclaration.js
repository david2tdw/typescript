"use strict";
exports.__esModule = true;
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
var ZipCodeValidator1 = /** @class */ (function () {
    function ZipCodeValidator1() {
    }
    ZipCodeValidator1.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator1;
}());
exports.ZipCodeValidator1 = ZipCodeValidator1;
exports.mainValidator = ZipCodeValidator1;
