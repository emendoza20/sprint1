const fs = require('fs');

const employees = JSON.parse(fs.readFileSync('employees.json', 'utf8'));
const salaries = JSON.parse(fs.readFileSync('salaries.json', 'utf8'));

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((elemento) => elemento.id === id);

    if (employee) {
      resolve(employee);
    } else {
      reject(`Employee with ID ${id} not found.`);
    }
  });
};

const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    if (employee != undefined) {
      const salaryObj = salaries.find((s) => s.id === employee.id);

      if (salaryObj) {
        resolve(salaryObj.salary);
      } else {
        reject(`Salary for employee ${employee.name} not found.`);
      }
    } else {
      reject('Employee is undefined.');
    }
  });
};

module.exports = {
  getEmployee,
  getSalary,
};
