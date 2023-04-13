const fs = require('fs');
const { getEmployee, getSalary } = require('../app/PromesasNivel2Ejercicio2');

const mockEmployees = JSON.parse(fs.readFileSync('mockEmployees.json', 'utf8'));
const mockSalaries = JSON.parse(fs.readFileSync('mockSalaries.json', 'utf8'));

describe('getEmployee function', () => {
  test('should return employee with id 1', () => {
    return expect(getEmployee(1)).resolves.toEqual(mockEmployees[0]);
  });

  test('should return employee with id 3', () => {
    return expect(getEmployee(3)).resolves.toEqual(mockEmployees[2]);
  });

  test('should reject with message "Employee with ID 4 not found."', () => {
    return expect(getEmployee(4)).rejects.toEqual('Employee with ID 4 not found.');
  });
});

describe('getSalary function', () => {
  test('should return salary of employee with id 1', () => {
    return expect(getSalary(mockEmployees[0])).resolves.toEqual(mockSalaries[0].salary);
  });

  test('should return salary of employee with id 2', () => {
    return expect(getSalary(mockEmployees[1])).resolves.toEqual(mockSalaries[1].salary);
  });

  test('should reject with message "Employee is undefined."', () => {
    return expect(getSalary(undefined)).rejects.toEqual('Employee is undefined.');
  });

  test('should reject with message "Salary for employee Jeff Bezos not found."', () => {
    return expect(getSalary(mockEmployees[2])).rejects.toEqual('Salary for employee Jeff Bezos not found.');
  });
});
