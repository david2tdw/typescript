class Person {
  protected name : string
  protected constructor (name : string) {
    this.name = name

  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
  }
  public getElevatorPitch() {
    return `hello, my name is ${this.name}, i work in ${this.department}`
  }

}


let howard = new Employee('howard', 'sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) //error

//let john = new Person("John");