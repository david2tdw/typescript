var sym1 = Symbol();
var sym2 = Symbol('key');
var sym3 = Symbol('key');
console.log(sym2 == sym3);
console.log(sym2 === sym3);
/*
let sym4 = Symbol()
let obj = {
  [sym4]: 'value'
}
console.log(obj[sym4])
*/
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
var getClassNameSymbol = Symbol();
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype[getClassNameSymbol] = function () {
        return 'C';
    };
    return C;
}());
var c = new C();
console.log(c[getClassNameSymbol]);
var className = c[getClassNameSymbol]();
console.log(className);
var _a;
