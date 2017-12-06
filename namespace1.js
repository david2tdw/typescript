var Validator;
(function (Validator) {
    var numberRegexp = /^[0-9]+$/;
    var letterRegexp = /^[a-zA-Z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validator.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validator.ZipCodeValidator = ZipCodeValidator;
})(Validator || (Validator = {}));
var strings = ['abc', '324', '23452'];
var validators = {};
validators['ZIP code'] = new Validator.ZipCodeValidator();
validators['Letters only'] = new Validator.LettersOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'" + s + "' " + (isMatch ? 'matched.' : 'not matched') + " " + name_1);
    }
}
