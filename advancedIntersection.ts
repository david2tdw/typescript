function extend<T, U>(first: T, second: U): T&U {
  let result = <T&U>{}
  for (let id in first) {
    (<any>result)[id]  = (<any>first)[id]
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}


class Person {
  constructor (public name: string) {

  }
}

interface Loggable {
  log(): void
}

class consoleLogger implements Loggable {
  log(){

  }
}

var jim = extend(new Person('jim'), new consoleLogger())

var n = jim.name
jim.log()