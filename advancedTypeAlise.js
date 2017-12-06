function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    return n();
}
var people;
var a = people.name;
var a = people.next.name;
var a = people.next.next.name;
var a = people.next.next.next.name;
