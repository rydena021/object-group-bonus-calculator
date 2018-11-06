$ ( document ).ready( readyNow );

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


let newEmployees = [];
// loop through employees
for (let employee of employees) {
  newEmployeeData(employee);
}

function newEmployeeData(employee) {
  // assign name
  newEmployee = {
    name: employee.name ,
    bonusPercentage: (percentageCaclutation(employee)) / 100
  }
  newEmployee.totalBonus = bonusCalculation(newEmployee, employee);
  newEmployee.totalCompensation = compensationCalculation(newEmployee, employee);
  console.log(newEmployee);
  newEmployees.push(newEmployee);
  return newEmployees;
}

function percentageCaclutation(employee) {
  let bonusPercentage = 0
  if (employee.employeeNumber.length == 4) {
    bonusPercentage += 5;
  }
  if (parseInt(employee.annualSalary) > 65000){
    bonusPercentage -= 1;
  }
  if (employee.reviewRating == 5) {
    bonusPercentage += 10;
  } else if (employee.reviewRating == 4) {
    bonusPercentage += 6;
  } else if (employee.reviewRating == 3) {
    bonusPercentage += 4;
  } else {
    bonusPercentage = 0;
  }
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0
  }
  return bonusPercentage;
}

function compensationCalculation(newEmployee, employee){
  return parseInt(employee.annualSalary) + newEmployee.totalBonus;
}

function bonusCalculation(newEmployee, employee){
  return Math.round(parseInt(employee.annualSalary) * newEmployee.bonusPercentage);
}

function readyNow(){
    console.log('JQ');
    $('#employeeButton').on('click', displayEmployees);
} // end readyNow

function displayEmployees() {
  let outputElement = $('#employeeList');
  outputElement.empty();
  for (let employee of newEmployees) {
    outputElement.append('<li>Name: ' + employee.name + '<br>Bonus Percentage: ' + employee.bonusPercentage * 100 + '%<br>Total Compensation: $' + employee.totalCompensation + '<br>Total Bonus: $' + employee.totalBonus + '</li>')
  }
}
