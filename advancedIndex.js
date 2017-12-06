function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jade',
    age: 32
};
var strings = pluck(person, ['name']);
