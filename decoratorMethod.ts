
class Greeter {
  greeting: string
  constructor (message: string) {
    this.greeting = message
  }

  @enumerable(false)
  greet () {
    return 'hello, ' + this.greeting
  }
}

function enumerable (value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}
/////>tsc --target es5 --experimentalDecorators decoratorMethod.ts