// superclase

export class Organismo {
    type: string;
    constructor( type:string ) {
        this.type = type;
    }

    getType():string {
        return this.type;
    }
}
