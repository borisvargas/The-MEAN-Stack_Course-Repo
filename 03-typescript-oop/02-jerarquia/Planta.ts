import { Organismo } from './Organismo';

class Planta extends Organismo {
    
    // estado
    height: number;
    age: number;
    species: string;

    constructor( 
        height:number ,
        age:number ,
        species:string 
    ) {
        super( 'planta' );
        this.height = height;
        this.age = age;
        this.species = species;
    }

    // comportamiento
    photosynthesis() {
        console.log(`La planta de tipo ${this.species} esta haciendo fotosistesis.`);
    }
}

let girasol = new Planta(12, 1, 'girasol');
girasol.photosynthesis();
console.log(`El ${girasol.species}es de tipo ${girasol.getType()}`);


