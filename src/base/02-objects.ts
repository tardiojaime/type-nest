
export const pokemonIds = [1,20,30,34,66]
//una forma de convertir a numero
//  pokemonIds.push(+'1')

// las interfacees no permiten instanciarlos
// las interfaces son un tipo de dato abstracto que define la estructura de un objeto o clase
interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const bulbasor: Pokemon = {
    id: 1,
    name: 'Bolbasour'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 5
}
//console.log(bulbasor)

//arreglo de pokemos
export const pokemons: Pokemon[] = []
pokemons.push( bulbasor, charmander)
console.log(pokemons)