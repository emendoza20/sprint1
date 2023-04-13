const { employees, salaries, getEmployee, getSalary, printEmployeeData } = require('../app/employees');

describe('Pruebas para employees.js', () => {
  test('getEmployee() debe lanzar un error para un ID inexistente', async () => {
    expect.assertions(1);
    try {
      await getEmployee(4);
    } catch (error) {
      expect(error).toEqual('ERROR No existe ese usuario');
    }
  });

  test('getSalary() debe lanzar un error para un empleado sin salario', async () => {
    expect.assertions(1);
    try {
      const employee = {
        id: 4,
        name: 'Steve Jobs'
      };
      await getSalary(employee);
    } catch (error) {
      expect(error).toEqual('Salario no encontrado');
    }
  });

  test('getSalary() debe lanzar un error para un argumento inválido', async () => {
    expect.assertions(1);
    try {
      await getSalary(undefined);
    } catch (error) {
      expect(error).toEqual('Salario no encontrado');
    }
  });

  test('printEmployeeData() debe lanzar un error para un ID inexistente', async () => {
    expect.assertions(1);
    try {
      await printEmployeeData(4);
    } catch (error) {
      expect(error).toEqual('ERROR No existe ese usuario');
    }
  });

  test('printEmployeeData() debe lanzar un error para un empleado sin salario', async () => {
    expect.assertions(1);
    try {
      await printEmployeeData(1);
    } catch (error) {
      expect(error).toEqual('Salario no encontrado');
    }
  });
});
``
