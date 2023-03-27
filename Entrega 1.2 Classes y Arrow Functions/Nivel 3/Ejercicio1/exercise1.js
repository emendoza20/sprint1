class Cats {
  constructor(brand, age, sex){
    this.brand = brand;
    this.age =  age;
    this.sex= sex;
  }
    sayHi = () => {
    console.log(`Hello, my brand is  ${this.brand} i have ${this.age} years and my sex is ${this.sex} `);
  };
}

let  Bengali = new Cats("Bengalí", 3, "Male");
let  angora= new Cats("angora", 5, "Female");
let  inglesShortHair= new Cats("Ingles Pelo corto", 2, "Female");
 Bengali.sayHi();
 angora.sayHi();
 inglesShortHair.sayHi();
//const Balines = new Cats("Balinés", 2, "F");


