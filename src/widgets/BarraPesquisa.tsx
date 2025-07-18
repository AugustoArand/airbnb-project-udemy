import { IconSearch } from "@tabler/icons-react"


const BarraPesquisa = () => {
    return (
       <div className="border border-gray-400 flex items-center rounded-full px-2 py-2 w-full max-w-2xl m-auto shadow-lg shadow-gray-300 overflow-clip">
            <input type="text" placeholder="Inicie sua busca.. " className="w-full focus:outline-none p-2"/>
            <button className="bg-red-400 rounded-full p-1">
                <IconSearch aria-label="Icone de pesquisa" size={28} color="white" />
            </button>
       </div>
    )
}

export default BarraPesquisa