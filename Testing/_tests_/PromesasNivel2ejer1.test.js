const { getEmployee, getSalary } = require("../app/PromesasNivel2ejer1");

describe("Test de funciones asincronas", () => {
  test("getEmployee devuelve Promise resuelta cuando se le pasa un ID existente", async () => {
    await expect(getEmployee(1)).resolves.toBe("Promise is resolved successfully.");
  });

  test("getEmployee devuelve Promise rechazada cuando se le pasa un ID inexistente", async () => {
    await expect(getEmployee(4)).rejects.toBe("Promise is rejected");
  });

  test("getSalary devuelve Promise resuelta con el salario correspondiente a un empleado existente", async () => {
    const employee = { id: 3, name: "Jeff Bezos" };
    await expect(getSalary(employee)).resolves.toBe(2000);
  });

  test("getSalary devuelve Promise rechazada cuando se le pasa un objeto de empleado inexistente", async () => {
    const employee = { id: 4, name: "Steve Jobs" };
    await expect(getSalary(employee)).rejects.toBe("Salario no encontrado");
  });
});

// Prueba con un id que no existe
test("getEmployee con id inexistente debe rechazar la promesa", () => {
  expect.assertions(1);
  return getEmployee(4).catch((error) => {
    expect(error).toMatch("Promise is rejected");
  });
});

// Prueba con un objeto employee indefinido
test("getSalary con employee indefinido debe rechazar la promesa", () => {
  expect.assertions(1);
  return getSalary(undefined).catch((error) => {
    expect(error).toMatch("Salario no encontrado");
  });
});

// Prueba con un objeto employee sin id
test("getSalary con objeto employee sin id debe rechazar la promesa", () => {
  expect.assertions(1);
  const employee = { name: "Steve Jobs" };
  return getSalary(employee).catch((error) => {
    expect(error).toMatch("Salario no encontrado");
  });
});

// Prueba con un id que no existe en el arreglo salaries
test("getSalary con id inexistente debe rechazar la promesa", () => {
  expect.assertions(1);
  const employee = { id: 4 };
  return getSalary(employee).catch((error) => {
    expect(error).toMatch("Salario no encontrado");
  });
});
