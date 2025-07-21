import { AirbnbApi } from "@/types/Airbnb"

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