function f() {
  console.log('f(): evaluated.')
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f() called')
  }
}


function g() {
  console.log('g() evaluated.')

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g() called.')
  }
}


class C {
  @f()
  @g()
  method() {

  }
}

///>tsc --target es5 --experimentalDecorators decorator1.ts
