import { fetchData } from "@/utils/api";
import Acomodacoes from "@/widgets/Acomodacoes";

import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbaHorizontal from "@/widgets/NavegacaoAbaHorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Home() {

  const dados = await fetchData();
  
  return (
    <>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="my-6 container mx-auto">
        <NavegacaoAbaHorizontal icons={dados.icons} />
        <Acomodacoes accommodation={dados.accommodation}/>
      </main>

      <hr className="my-6" />

      <footer className="">
        <Rodape />
      </footer>
    </>
  );
}
