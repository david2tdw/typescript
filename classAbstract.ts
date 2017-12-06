abstract class Department {
  constructor (public name: string) {

  }
  printName (): void {
    console.log('department name: ' + this.name)
  }
  abstract printMeeting() :void

}


class AccountingDepartment  extends Department {
  constructor() {
    super('Accounting and Auditing')
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReport() {
    console.log('Generating accounting reports...')
  }

}

let department : Department
department = new AccountingDepartment()
department.printMeeting()
department.printName()
//department.generateReport()
