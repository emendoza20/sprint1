// Nivel 2 - Ejercicio 1
const funcRecursive= (mensaje,n) => {
      if (n>0) {
        console.log(mensaje)
        setTimeout(() => {
          funcRecursive(mensaje,n - 1)
    }, 1000)
   
}
}

funcRecursive('Guten morgen',3)

 
