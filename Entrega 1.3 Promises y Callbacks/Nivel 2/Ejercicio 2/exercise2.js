debugger;
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

/*const getSalary = (employe) => {

  for (let i = 0; i <= salaries.length; i++) {
    if (salaries[i].id === employe.id) {
         console.log(salaries[i].salaries)
    }
  }
};
getSalary(employees[1]);*/


const  getSalary  = (employe) => {
  return new Promise((resolve, reject) => {
     // condition
     const finder = salaries.find((elemento) => elemento.id === employe.id);
     if (finder) {
      resolve(console.log(finder.salary));
    } else {
      reject("Promise is rejected");
    }
 });  
 
 };
getSalary (employees[0])