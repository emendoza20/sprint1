const { getEmployee, getSalary } = require("../app/PromesasNivel2ejer1");

describe("getEmployee", () => {
  it("should resolve the promise with the employee object if the id exists", () => {
    return expect(getEmployee(1)).resolves.toEqual({
      id: 1,
      name: "Linux Torvalds",
    });
  });

  it("should reject the promise if the id does not exist", () => {
    return expect(getEmployee(4)).rejects.toEqual("Employee not found");
  });
});

describe("getSalary", () => {
  it("should resolve the promise with the salary object if the id exists", () => {
    return expect(getSalary(2)).resolves.toEqual({
      id: 2,
      salary: 1000, 
    });
  });

  it("should reject the promise if the id does not exist", () => {
    return expect(getSalary(4)).rejects.toEqual("Salary not found");
  });
});
