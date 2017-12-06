@sealed
class Greeter {
  greeting: string
  constructor (message: string) {
    this.greeting = message
  }
  greet () {
    return 'hello, ' + this.greeting
  }
}

function sealed (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

/////>tsc --target es5 --experimentalDecorators decoratorClass.ts