var someArray = [1, 'string', false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var i = someArray_1[_i];
    console.log(i);
}
console.log('-----------------------');
for (var i in someArray) {
    console.log(i);
}
