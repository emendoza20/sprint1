 const {  getEmployee,getSalary,printEmployeeData} = require('../app/asyncawaiterrors');
       
describe('getEmployee', () => {
  test('should return an employee object if ID exists', () => {
    return getEmployee(1).then((employee) => {
      expect(employee).toEqual({ id: 1, name: 'Linux Torvalds' });
    });
  });

  test('should return an error if ID does not exist', () => {
    return getEmployee(4).catch((error) => {
      expect(error).toEqual(new Error('ERROR: No existe ese usuario'));
    });
  });
});

describe('getSalary', () => {
  test('should return the salary of an employee object', () => {
    const employee = { id: 2, name: 'Bill Gates' };
    return getSalary(employee).then((salary) => {
      expect(salary).toEqual(1000);
    });
  });

  test('should return an error if employee is not specified', () => {
    return getSalary().catch((error) => {
      expect(error).toEqual('Empleado no especificado');
    });
  });

  test('should return an error if salary is not found', () => {
    const employee = { id: 4, name: 'Elon Musk' };
    return getSalary(employee).catch((error) => {
      expect(error).toEqual('Salario no encontrado');
    });
  });
});

describe('printEmployeeData', () => {
  test('should print employee data if ID exists', async () => {
    console.log = jest.fn();
    await printEmployeeData(3);
    expect(console.log).toHaveBeenCalledWith('Empleado encontrado: Jeff Bezos');
    expect(console.log).toHaveBeenCalledWith('El salario es 2000');
  });

  test('should throw an error if ID does not exist', async () => {
    console.error = jest.fn();
    await printEmployeeData(4);
    expect(console.error).toHaveBeenCalledWith(new Error('ERROR: No existe ese usuario'));
  });
});
