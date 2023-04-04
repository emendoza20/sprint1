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
         reject("ERROR No existe ese usuario");
       }
   
     });
   
   };
   const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        if (employee != undefined) {
            const finderSalary = salaries.find((elemento) => elemento.id === employee.id);
                if (finderSalary) {
                    resolve(finderSalary.salary)
                }
            
        }
        reject(`Salario no encontrado`);
    });
  }
  

async function printEmployeeData(Id) {
    try {
      const employee = await getEmployee(Id);
      const salary = await getSalary(employee);
      console.log(`Empleado encontrado: ${employee.name}`);
      console.log(`El salario es ${salary}`);
    } catch (error) {
      console.error(error);
    }
  }

  printEmployeeData(2);