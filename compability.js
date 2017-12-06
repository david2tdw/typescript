var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var a;
a = new Person();
var y = { name: 'alice', location: 'America' };
a = y;
function greet(a) {
    console.log('hello ' + a.name);
}
greet(y);
