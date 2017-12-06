interface Named {
  name: string
}

class Person {
  name: string
}

let a : Named
a = new Person()



let y  = {name: 'alice', location: 'America'}
a = y



function greet(a: Named) {
  console.log('hello ' + a.name)
}

greet(y)