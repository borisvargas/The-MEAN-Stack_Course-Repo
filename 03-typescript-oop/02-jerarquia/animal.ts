import { Organismo } from './Organismo';


// Superclase-Subclase
class Animal extends Organismo{
    
    // estado
    age: number;
    name: string;
    weight: number;
    gender: string;
    color: string;

    constructor(
        age: number,
        name: string,
        weight: number,
        gender: string,
        color: string
    ) {
        super( 'animal' );
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
    }

    // comportamiento
    breathe() {
        console.log(`${this.name} esta respirando.`);
    }
    eat( food:string ) {
        console.log(`${this.name} come ${food}.`);
    }
    run( destination:number ) {
        console.log(`${this.name} corre ${destination} metros.`);
    }
    sleep( hours:number ) {
        console.log(`${this.name} duerme ${hours} horas.`);
    }
    makeNoise( noiseType:string ) {
        console.log(`${this.name} ${noiseType}.`);
    }
}

// Subclase
class Dog extends Animal {

    constructor(
        age: number,
        name: string,
        weight: number,
        gender: string,
        color: string
    ) {
        super(age, name, weight, gender, color );
    }

    bark() {
        super.makeNoise('ladra');
    }

}

let myDog = new Dog( 10, 'chimuelo', 13, 'macho', 'negro');
myDog.breathe();
myDog.eat('carne');
myDog.bark();


// Subclase
class Cat extends Animal {

    constructor(
        age: number,
        name: string,
        weight: number,
        gender: string,
        color: string
    ) {
        super(age, name, weight, gender, color );
    }

    meow() {
        super.makeNoise('maulla');
    }

}

let myCat = new Cat( 10, 'snowball', 3, 'macho', 'blanco');
myCat.breathe();
myCat.eat('Pescado')
myCat.meow();