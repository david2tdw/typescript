"use strict";
exports.__esModule = true;
var Zip = require("./ZipCodeValidator1");
var strings = ['12365', 'sdf', '23'];
var myValidator = new Zip();
strings.forEach(function (s) {
    console.log("'" + s + "' - " + (myValidator.isAcceptable(s) ? 'matched.' : 'not matched.'));
});
