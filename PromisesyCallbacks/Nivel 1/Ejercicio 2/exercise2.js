
 
 let showMessage=(nombre, callback)=>{ 
  const myName = `Hola mi nombre es, + ${nombre}`;
  callback(myName); // 2
}

let logName=(nombre)=>{
  console.log(nombre);
}

showMessage("Elizabeth", logName); // 1

 