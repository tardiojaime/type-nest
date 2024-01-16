import axios from 'axios'
// clase que nos servira para injectar esta clase
// cuando le paquete axios cambie 
// solo necesitamos modifica esta clase base
// facilitando la mantenivilidad
export interface HttpAdapter{
    get<T>(url: string): Promise<T>
}

export class PokeApiAdapter implements HttpAdapter{
    private readonly axios = axios;
    //tipo generico
    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url)
        console.log('axios')
        return data
    }
    async post(url: string, data: any) {
        return
    }
    async patch(url: string, data: any) {
        return
    }
    async delete(url: string) {
        return
    }
}