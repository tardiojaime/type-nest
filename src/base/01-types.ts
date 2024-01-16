export let name:string = 'Fernando';
export const age: number = 35
export const isValid: boolean = true

name = 'The Best'

// templete string

export const templeString = `Esto es un String
multilinea que puede tener
" dobles, ' simples
inyectar valorres ${name}
expresiones ${ 1+2 }
numeros: ${ age }
booleanos: ${isValid}
`
console.log(templeString)