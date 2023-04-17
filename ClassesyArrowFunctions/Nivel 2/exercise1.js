

const Greeting = mensaje => {
    return { atributo: mensaje};
  }

const miObjeto = Greeting("Hola mundo");
console.log(miObjeto); // { atributo: "Hola mundo" }