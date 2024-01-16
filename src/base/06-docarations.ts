
const Deprecated = ( DeprecationReaseon: string) =>{
    return (target:any, memberName: string, propertyDescriptor: PropertyDescriptor) =>{
        return{
            get(){
                const wrapperFn = (...args:any[])=>{
                    console.warn(`Method ${memberName} is deprecated eith reason ${DeprecationReaseon}`)
                    // llamar la funcion propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}

export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){

    }
    scream(){// gritar
        console.log(`${ this.name.toUpperCase() }`)
    }
    @Deprecated('Utlize el metodo speak3 method instead')
    speak(){ // hablar
        console.log(` ${this.name}, ${this.name}!`)
    }

}
export const Pikachu = new Pokemon(1, 'Pikachu')
Pikachu.scream()
Pikachu.speak()