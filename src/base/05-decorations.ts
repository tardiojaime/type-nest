

class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){

    }
    scream(){// gritar
        console.log('no quiero')
    }
    speak(){ // hablar
        console.log(` no quiero hablaar!`)
    }
}
// Un decorador tiene acceso a la definicion de la clase
// - expandir, extender, añadir, bloquear, remover funcionalidad
// -- sobreescribir complementamente la clase 
const MyDecorator = () => {
    return( target: Function) =>{
        console.log(target)
        // mandamos la nueva clase a establecer
        return NewPokemon
    }
}

// A la hora de crear modificamos la clase con el decorador
@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){

    }
    scream(){// gritar
        console.log(`${ this.name.toUpperCase() }`)
    }
    speak(){ // hablar
        console.log(` ${this.name}, ${this.name}!`)
    }

}
export const Pikachu = new Pokemon(1, 'Pikachu')
Pikachu.scream()
Pikachu.speak()