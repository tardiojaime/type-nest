
import { Move, PokeapiResponse } from '../interface/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon1 {
    //las injecciones se las realiza por el constructor
    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ) {

    }
    speak(){
        console.log(`${this.name}, ${this.name}`)
    }
    // tipado de la respuesta optenida con axios.get
    async getMovies(): Promise<Move[]>{
        //axios devulve una promesa
        // await espera que se resuelva
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves)
        return data.moves;
    }
}

export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>(url:string){
        const resp = await fetch(url);
        const data: T = await resp.json()
        console.log('fetch')
        return data
    }
}
// en esta clase inyectamos la clase pokeApi.adapter -> PokeApiAdapter
const pokeApiFetcj = new PokeApiFetchAdapter();
const axios = new PokeApiAdapter()
// en teoria se podria implementar el fetch o axios, clases que tiene el metodo get
export const charmander = new Pokemon1(1, 'Charmander dos', pokeApiFetcj);
const dat = await charmander.getMovies()
console.log(dat)
//principio de sustitucion 
