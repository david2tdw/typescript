
let pets = new Set(['cat','dog','hamse'])
pets['species'] ='mannnams'


for (let i in pets) {
  console.log(i)
}
console.log('----------------')


let array1 = Array.from(pets)
for (let i of array1) {
  console.log(i)
}
console.log('----------------')

pets.forEach(function (element, sameElement, set) {
  console.log(element)
})


console.log('----------------')
let pets1 = new Set([1,2,3])
for (let i in pets1) {
  console.log(pets1[i])
}

//tsc --lib es6 iterator2.ts