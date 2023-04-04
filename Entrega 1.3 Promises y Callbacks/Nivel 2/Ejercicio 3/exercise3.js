debugger
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
     // condition
     const finder = employees.find((elemento) => elemento.id === id);
     if (finder) {
       resolve(finder);
     } else {
       reject("No existe ese usuario");
     }
 
   });
 
 };
 const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
      if (employee != undefined) {
          for (let i= 0; i < salaries.length; i++) {
              if (salaries[i].id === employee.id) {
                 
                  resolve(salaries[i].salary)
              }
          }
      }
      reject(`Salario no encontrado`);
  });
}

getEmployee(4)
  .then((employee) => {
    console.log(`Empleado encontrado: ${employee.name}`);
    return getSalary(employee);
  })
  .then((salary) => {
    console.log(`El salario es ${salary}`);
  })
  .catch((error) => {
    console.log(error);
  });