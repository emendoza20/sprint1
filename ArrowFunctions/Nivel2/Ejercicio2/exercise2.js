class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log(this.nom);
  }
}
const person = new Persona("Elizabeth");
person.dirNom(); 
