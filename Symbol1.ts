let sym1 = Symbol()
let sym2 = Symbol('key')


let sym3 = Symbol('key')
console.log(sym2 == sym3)
console.log(sym2 === sym3)




/*
let sym4 = Symbol()
let obj = {
  [sym4]: 'value'
}
console.log(obj[sym4])
*/

let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]);


const getClassNameSymbol = Symbol()
 class C {
   [getClassNameSymbol]() {
     return 'C'
   }
 }

 let c = new C()
 console.log(c[getClassNameSymbol])
 let className = c[getClassNameSymbol]()
 console.log(className)