var pets = new Set(['cat', 'dog', 'hamse']);
pets['species'] = 'mannnams';
for (var i in pets) {
    console.log(i);
}
console.log('----------------');


//es5 not work, use forEach()
for (let i of pets) {
  console.log(i)
}

console.log('----------------');
pets.forEach(function (element, sameElement, set) {
    console.log(element);
});
console.log('----------------');

/*
var pets1 = new Set([1, 2, 3]);
for (var i in pets1) {
    console.log(pets1[i]);
}

Array可以采用下标进行循环遍历，Map和Set就无法使用下标
*/

//tsc -t es6 iterator2.ts