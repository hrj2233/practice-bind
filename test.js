// Your code here
const Employee = require("./employee");

const employee1 = new Employee("John Wick", "Dog Lover");
const employeeName = employee1.sayName.bind(employee1);
const employeeOccupation = employee1.sayOccupation.bind(employee1);
setTimeout(employeeName, 2000);
setTimeout(employeeOccupation, 3000);
