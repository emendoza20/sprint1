
 const array_of_functions= [
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()},
    function() {count()}
]

const numbers=[0,1,2,3,4,5,6,7,8,9]

let count=()=> numbers.forEach(element=>console.log(element));

/***function count(){
    numbers.forEach(element=>console.log(element));
}***/
 for (let i = 0; i < array_of_functions.length; i++) {
        console.log(`llamada ${i}` )
        array_of_functions[i]();
}

//array_of_functions.forEach(index=> array_of_functions[index]())
  
