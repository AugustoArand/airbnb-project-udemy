import { Accommodation, AirbnbApi } from "@/types/Airbnb"

// "dados" é retornado em formato de Promise, sendo assim, precisamos direcionar no "fetchData" o tipo de retorno
// e o tipo de retorno já foi configurado no arquivo "Airbnb.ts", então nós importamos o tipo "AirbnbApi" para que
// o TypeScript possa entender o que estamos retornando e assim, o TypeScript não irá reclamar de nenhum erro de tipagem

export async function fetchData(): Promise<AirbnbApi> {
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json() // Converte os dados em tipo JSON
        return dados

    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function fetchDataById(id: string): Promise<Accommodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find( (item:Accommodation) => {
            return item.slug === decodeURIComponent(id) // Decode remove acentuações ou espaços na URL
            // Retorna um slug que seja igual ao id, e o ID é o que vem na URL em formato string
        })
        return acomodacao
    } catch (e) {
        console.error(e)
        throw e 
    }
}