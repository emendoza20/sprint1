 
const {getEmployee, getSalary} = require('../app/jobs.js');


const employees = [
  { id: 1, name: 'Linux Torvalds' },
  { id: 2, name: 'Bill Gates' },
  { id: 3, name: 'Jeff Bezos' }
];

const salaries = [
  { id: 1, salary: 4000 },
  { id: 2, salary: 1000 },
  { id: 3, salary: 2000 }
];

jest.mock('../app/employees.json', () => employees);
jest.mock('../app/salaries.json', () => salaries);

describe('getEmployee', () => {
  test('returns a promise that resolves to the employee object', () => {
    return expect(getEmployee(1)).resolves.toEqual("Promise is resolved successfully.");
  });

  test('returns a promise that rejects if employee is not found', () => {
    return expect(getEmployee(4)).rejects.toEqual('Promise is rejected');
  });
});

describe('getSalary', () => {
  test('returns a promise that resolves to the salary of the given employee', () => {
    const employee = { id: 1, name: 'Joan gonzales' };
    return expect(getSalary(employee)).resolves.toEqual(4000);
  });

  test('returns a promise that rejects if salary is not found', () => {
    const employee = { id: 4, name: 'Steve Jobs' };
    return expect(getSalary(employee)).rejects.toEqual('Salario no encontrado');
  });
});