"use strict";
exports.__esModule = true;
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ['hello', '98052', '233'];
strings.forEach(function (s) {
    console.log("'" + s + "' " + (StaticZipCodeValidator_1["default"](s) ? ' matched.' : ' not matched.'));
});
