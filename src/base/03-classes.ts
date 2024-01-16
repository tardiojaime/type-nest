import axios from 'axios'
import { Move, PokeapiResponse } from '../interface/pokeapi-response.interface';

export class Pokemon {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        console.log('constructor llamando')
    }
}
// forma corta
//readonly - la propiedad no se puede cambiar
export class Pokemon1 {

    //metodos getter
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`
    }
    // metodos funciones que tienen acceso a los propiedades y metodos
    constructor(
        public readonly id: number,
        public name: string,
    ) {

    }
    // si el metodo es statico, no puede utilizar this
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    // por defecto public
    // private solo se la puede utilizar dentro de la clase
    speak(){
        console.log(`${this.name}, ${this.name}`)
    }
/*     async getMovies(){
        return 10;
    } */
    // tipado de la respuesta optenida con axios.get
    async getMovies(): Promise<Move[]>{
        //axios devulve una promesa
        // await espera que se resuelva
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data)
        return data.moves;
    }
}
export const charmander = new Pokemon1(1, 'Charmander');
/* charmander.scream()
charmander.speak() */
/* charmander.id = 10
charmander.name = 'New Pokemon'
console.log(charmander.name) */

// Metodos Asincronos - metod que retorna una promesa
// este metodo devuelve una promesa
const datos = await charmander.getMovies();
console.log(datos)