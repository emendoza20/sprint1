let employees = [
    {
      id: 1,
      name: "Linux Torvalds",
    },
    {
      id: 2,
      name: "Bill Gates",
    },
    {
      id: 3,
      name: "Jeff Bezos",
    },
  ];
  
  let salaries = [
    {
      id: 1,
      salary: 4000,
    },
    {
      id: 2,
      salary: 1000,
    },
    {
      id: 3,
      salary: 2000,
    },
  ];
  
  const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
      const employee = employees.find((employee) => employee.id === id);
      if (employee) {
        resolve(employee);
      } else {
        reject("Employee not found");
      }
    });
  };
  
  const getSalary = (id) => {
    return new Promise((resolve, reject) => {
      const salary = salaries.find((salary) => salary.id === id);
      if (salary) {
        resolve(salary);
      } else {
        reject("Salary not found");
      }
    });
  };
  
  module.exports = {
    getEmployee,
    getSalary,
  };
  