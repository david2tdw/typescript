var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "hello, my name is " + this.name + ", i work in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee('howard', 'sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name) //error
//let john = new Person("John"); 
