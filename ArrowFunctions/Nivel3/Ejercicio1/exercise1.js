class Persona {
    constructor(nom, cognom) {
  
      if (this.name = nom,
        this.surname = cognom,
        this.constructor === Persona) {
        throw new Error("No se puede instanciar una clase abstracta")
      };
    }
    InfoPersona() {
      console.log(this.name + " " + this.surname);
    }
  }
  
  class Personaje extends Persona {
    constructor(nom, cognom) {
      super(nom, cognom);
    }
  }
  
  const f1 = (nom, cognom) => new Persona(nom, cognom);
  const f2 = (nom, cognom) => new Personaje(nom, cognom);
  
  //ERROR: No se puede instanciar una clase abstracta
  //const persona0 = f1("Johny", "Melavo")
  
  //Se puede instanciar una subclase
  const persona1 = f2("Esther", "Colero");
  const persona2 = f2("Benito", "Camela");
  const persona3 = f2("Elver", "Galarga");
  
  persona1.InfoPersona()
  persona2.InfoPersona()
  persona3.InfoPersona()