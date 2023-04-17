const arrayOFunctions = [];

  const functionFilled=()=>{
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
 
  }
  for (let i = 0; i < 10; i++) {
    arrayOFunctions.push(functionFilled());
  }