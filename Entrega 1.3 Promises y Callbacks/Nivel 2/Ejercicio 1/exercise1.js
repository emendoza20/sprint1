let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmployee=(id) => {

    const myPromise = new Promise((resolve, reject) => {  
        // condition
    const finder = employees.find( elemento => elemento.id === id );

    if(finder){    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
    


    });

}
getEmployee(1);


var promise = new Promise(function(resolve, reject) {
  
    function sayHello() {
      resolve('Hello World!')
    }
  
    reject('Something went wrong!!')
  
    setTimeout(sayHello, 10000)
  
  })
  
  promise
    .then(function(message) {
      console.log(message)
    })
    .catch(function(err) {
      console.error('ERROR: ' + err)
    })
  
  // 'ERROR: Something went wrong!'
  