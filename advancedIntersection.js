function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var consoleLogger = /** @class */ (function () {
    function consoleLogger() {
    }
    consoleLogger.prototype.log = function () {
    };
    return consoleLogger;
}());
var jim = extend(new Person('jim'), new consoleLogger());
var n = jim.name;
jim.log();
